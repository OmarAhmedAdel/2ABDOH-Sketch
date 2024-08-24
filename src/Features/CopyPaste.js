import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useCanvas } from "../Features/CanvasContext";
import { SelectStrokes } from "../Components/SelectStrokes";
import { FileNotFound } from "../Components/Errors/FileNotFound";

const buttonStyle = {
  right: "210px",
};

export const CopyPaste = () => {
  const { drawInkml, canvasRef } = useCanvas();
  const [showBox, setShowBox] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [startStroke, setStartStroke] = useState(1);
  const [endStroke, setEndStroke] = useState(1);
  const [maxStrokes, setMaxStrokes] = useState(1);

  const handleCopy = () => {
    const inkMLString = localStorage.getItem("openedFileContent");
    if (!inkMLString) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(inkMLString, "application/xml");
    const traces = xmlDoc.getElementsByTagName("trace");

    let copiedTraces = [];
    for (let i = startStroke - 1; i < endStroke; i++) {
      const trace = traces[i];
      copiedTraces.push(trace.cloneNode(true));
    }

    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    copiedTraces.forEach((trace) => {
      const tracePoints = trace.textContent
        .trim()
        .split(/\s+/)
        .map((point) => {
          const [x, y] = point.split(",").map(parseFloat);
          return { x, y };
        });

      const minX = Math.min(...tracePoints.map((p) => p.x));
      const maxX = Math.max(...tracePoints.map((p) => p.x));
      const minY = Math.min(...tracePoints.map((p) => p.y));
      const maxY = Math.max(...tracePoints.map((p) => p.y));

      const shiftX = centerX - (minX + maxX) / 2;
      const shiftY = centerY - (minY + maxY) / 2;

      const shiftedPoints = tracePoints.map(
        ({ x, y }) => `${x + shiftX},${y + shiftY}`
      );
      trace.textContent = shiftedPoints.join(" ");

      xmlDoc.documentElement.appendChild(trace);
    });

    const serializer = new XMLSerializer();
    const updatedInkMLString = serializer.serializeToString(xmlDoc);
    localStorage.setItem("openedFileContent", updatedInkMLString);
    drawInkml(updatedInkMLString);

    setShowBox(false);
  };

  useEffect(() => {
    const inkMLString = localStorage.getItem("openedFileContent");

    if (inkMLString) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(inkMLString, "text/xml");
      const strokes = xml.getElementsByTagName("trace");
      const strokeCount = strokes.length;

      setMaxStrokes(strokeCount);
      setStartStroke(1);
      setEndStroke(strokeCount);
    }
  }, []);

  return (
    <>
      <Tooltip title="Copy Selected Strokes">
        <IconButton
          onClick={() => {
            const inkMLString = localStorage.getItem("openedFileContent");
            if (!inkMLString) {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 5000);
              return;
            }
            setShowBox(true);
          }}
          style={buttonStyle}
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
      <FileNotFound showAlert={showAlert} />
      {showBox && (
        <SelectStrokes
          startStroke={startStroke}
          endStroke={endStroke}
          maxStrokes={maxStrokes}
          setStartStroke={setStartStroke}
          setEndStroke={setEndStroke}
          handleSet={handleCopy}
          handleClear={() => setShowBox(false)}
          buttonLabel="Paste"
        />
      )}
    </>
  );
};
