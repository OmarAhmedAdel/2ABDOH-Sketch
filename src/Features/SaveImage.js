import React from "react";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useCanvas } from "../Features/CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "-30px", // 30px when having redo & undo buttons otherwise it is 90px // previously 100px // 0px is the new position // -30px is the new position
};

export const SaveCanvasButton = () => {
  const { canvasRef } = useCanvas();

  const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "Sketch.png";
    document.body.appendChild(anchor);

    // Trigger the anchor click to begin download
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  return (
    <Tooltip title="Save As Image">
      <IconButton
        onClick={handleSave}
        style={buttonStyle}
        aria-label="Save as Image"
      >
        <SaveIcon />
      </IconButton>
    </Tooltip>
  );
};
