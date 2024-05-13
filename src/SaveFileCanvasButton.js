import React from "react";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useCanvas } from "./CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "40px", // 100px when having redo & undo buttons otherwise it is 160px // 30 and then 70 are the old position
};

export const SaveFileCanvasButton = () => {
  const { drawingCommandsRef } = useCanvas();

  const convertToInkML = () => {
    let inkMLString = '<?xml version="1.0" encoding="ASCII"?>\n';
    inkMLString += '<ink xmlns="http://www.w3.org/2003/InkML">\n';
    inkMLString += '  <context inkSourceRef="Tablet PC"/>\n';
    inkMLString += '  <captureDevice sampleRate="125">\n';
    inkMLString += "    <channelList>\n";
    inkMLString += '      <channelDef name="X"/>\n';
    inkMLString += '      <channelDef name="Y"/>\n';
    inkMLString += "    </channelList>\n";
    inkMLString += "  </captureDevice>\n";

    // Read existing content from localStorage
    const existingContent = localStorage.getItem("openedFileContent");

    // Append existing trace elements if available
    if (existingContent) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(existingContent, "text/xml");
      const traceElements = xmlDoc.getElementsByTagName("trace");
      for (let traceElement of traceElements) {
        inkMLString += traceElement.outerHTML + "\n";
      }
    }

    // Iterate over drawing commands
    let currentTrace = "";
    let currentTraceId = 1;
    let penDownFlag = false;

    for (let command of drawingCommandsRef.current) {
      if (
        command.position &&
        command.position.x !== undefined &&
        command.position.y !== undefined
      ) {
        if (command.type === "start") {
          if (penDownFlag) {
            inkMLString += `  <trace id="id${currentTraceId}" type="penDown">${currentTrace}</trace>\n`;
            currentTraceId++;
          }
          currentTrace = `${command.position.x} ${command.position.y},`;
          penDownFlag = true;
        } else if (command.type === "move") {
          currentTrace += `${command.position.x} ${command.position.y},`;
        } else if (command.type === "end") {
          currentTrace += `${command.position.x} ${command.position.y},`;
          inkMLString += `  <trace id="id${currentTraceId}">${currentTrace}</trace>\n`;
          currentTraceId++;
          penDownFlag = false;
        }
      }
    }

    if (penDownFlag) {
      // If penDownFlag is true after the loop, add the remaining trace
      inkMLString += `  <trace id="id${currentTraceId}" type="penDown">${currentTrace}</trace>\n`;
    }

    inkMLString += "</ink>";

    return inkMLString;
  };

  const handleSave = () => {
    const inkMLData = convertToInkML();
    localStorage.setItem("openedFileContent", inkMLData);
    const blob = new Blob([inkMLData], { type: "application/xml" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Sketch.inkml";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  return (
    <Tooltip title="Save as inkml File">
      <IconButton
        onClick={handleSave}
        style={buttonStyle}
        aria-label="save as inkml file"
      >
        <SaveAltIcon />
      </IconButton>
    </Tooltip>
  );
};
