import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RedoIcon from "@mui/icons-material/Redo";
import { useCanvas } from "./CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "250px",
};

export const RedoCanvasButton = () => {
  const { redoLastStep } = useCanvas();

  return (
    <Tooltip title="Redo">
      <IconButton
        variant="contained"
        onClick={redoLastStep}
        style={buttonStyle}
      >
        <RedoIcon />
      </IconButton>
    </Tooltip>
  );
};
