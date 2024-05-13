import React, { useContext, useRef, useState } from "react";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const drawingCommandsRef = useRef([]);
  const undoStackRef = useRef([]);
  const redoStackRef = useRef([]);
  const openedFileDrawingCommandsRef = useRef([]);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  // const startDrawing = ({ nativeEvent }) => {
  //   const { offsetX, offsetY } = nativeEvent;
  //   contextRef.current.beginPath();
  //   contextRef.current.moveTo(offsetX, offsetY);
  //   setIsDrawing(true);
  //   // Store start of drawing command
  //   drawingCommandsRef.current.push({
  //     type: "start",
  //     position: { x: offsetX, y: offsetY },
  //   });
  // };

  // const finishDrawing = () => {
  //   contextRef.current.closePath();
  //   setIsDrawing(false);
  //   // Store end of drawing command
  //   drawingCommandsRef.current.push({ type: "end" });
  //   // After finishing drawing, clear redo stack
  //   redoStackRef.current = [];
  // };

  // const draw = ({ nativeEvent }) => {
  //   if (!isDrawing) {
  //     return;
  //   }
  //   const { offsetX, offsetY } = nativeEvent;
  //   contextRef.current.lineTo(offsetX, offsetY);
  //   contextRef.current.stroke();
  //   // Store move of drawing command
  //   drawingCommandsRef.current.push({
  //     type: "move",
  //     position: { x: offsetX, y: offsetY },
  //   });
  // };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    if (!isErasing) {
      // Check if erasing mode is not active
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
      // Store start of drawing command
      drawingCommandsRef.current.push({
        type: "start",
        position: { x: offsetX, y: offsetY },
      });
    }
  };

  const finishDrawing = () => {
    if (!isErasing) {
      // Check if erasing mode is not active
      const context = contextRef.current;
      context.closePath();
      setIsDrawing(false);
      // Store end of drawing command
      drawingCommandsRef.current.push({ type: "end" });
      // After finishing drawing, clear redo stack
      redoStackRef.current = [];
    }
  };

  const draw = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    if (!isDrawing && !isErasing) {
      return;
    }

    if (isDrawing && !isErasing) {
      context.lineTo(offsetX, offsetY);
      context.stroke();
      // Store move of drawing command
      drawingCommandsRef.current.push({
        type: "move",
        position: { x: offsetX, y: offsetY },
      });
    } else if (isErasing) {
      const eraserSize = 10; // Adjust the size of the eraser as needed
      context.clearRect(
        offsetX - eraserSize / 2,
        offsetY - eraserSize / 2,
        eraserSize,
        eraserSize
      );
      // Store eraser action
      drawingCommandsRef.current.push({
        type: "erase",
        position: { x: offsetX, y: offsetY },
        size: eraserSize,
      }); // this part isn't saved right in the file format and needs to be handled!
    }
  };

  const clearCanvas = () => {
    // localStorage.removeItem("openedFileContent");
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // Clear drawing commands
    drawingCommandsRef.current = [];
    // After clearing canvas, clear redo stack
    redoStackRef.current = [];
    setIsErasing(false);
  };

  const undoLastStep = () => {
    let lastStrokeIndex = null;

    // Find the index of the last completed stroke
    for (let i = drawingCommandsRef.current.length - 1; i >= 0; i--) {
      if (drawingCommandsRef.current[i].type === "end") {
        lastStrokeIndex = i;
        break;
      }
    }

    // If no stroke is found or it's the first stroke, undo the entire drawing
    if (lastStrokeIndex === null || lastStrokeIndex === 0) {
      undoStackRef.current.push(drawingCommandsRef.current.splice(0));
    } else {
      // Otherwise, undo the last stroke and all subsequent strokes
      undoStackRef.current.push(
        drawingCommandsRef.current.splice(lastStrokeIndex)
      );
    }

    redraw();
  }; // current

  const redoLastStep = () => {
    if (undoStackRef.current.length > 0) {
      const lastUndoneStroke = undoStackRef.current.pop();
      drawingCommandsRef.current.push(...lastUndoneStroke);
      redraw();
    }
  };

  const redraw = () => {
    const context = contextRef.current;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawingCommandsRef.current.forEach((command) => {
      if (command.type === "start") {
        context.beginPath();
        context.moveTo(command.position.x, command.position.y);
      } else if (command.type === "move") {
        context.lineTo(command.position.x, command.position.y);
        context.stroke();
      }
    });
  };

  const drawInkml = (inkmlContent) => {
    localStorage.setItem("openedFileContent", inkmlContent);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(inkmlContent, "text/xml");
    const traces = xmlDoc.getElementsByTagName("trace");
    clearCanvas();
    for (let i = 0; i < traces.length; i++) {
      const trace = traces[i];
      if (trace.hasAttribute("duration")) {
        const points = parseTracePointsForDatasetFiles(trace.textContent);
        drawStroke(points);
      } else {
        const points = parseTracePoints(trace.textContent);
        drawStroke(points);
      }
    }
    setIsErasing(false);
  };

  const parseTracePoints = (traceContent) => {
    return traceContent
      .trim()
      .split(/\s+/)
      .map((point) => {
        const [y, x] = point.split(",").map(parseFloat);
        return { y, x };
      });
  };

  const parseTracePointsForDatasetFiles = (traceContent) => {
    return traceContent
      .trim()
      .split(/\s+/)
      .map((point) => {
        const [y, x] = point.split(",").map(parseFloat);
        return { y, x };
      });
  };

  const drawStroke = (points) => {
    const context = contextRef.current;
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      context.lineTo(point.x, point.y);
    }
    context.stroke();
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        undoLastStep,
        redoLastStep,
        draw,
        drawInkml,
        drawingCommandsRef,
        openedFileDrawingCommandsRef,
        isErasing,
        setIsErasing,
        isDrawing,
        setIsDrawing,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
