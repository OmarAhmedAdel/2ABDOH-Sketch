import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import UndoIcon from "@mui/icons-material/Undo";
import { useCanvas } from "../Features/CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "240px",
};

export const UndoCanvasButton = () => {
  const { undoLastStep } = useCanvas();

  return (
    <Tooltip title="Undo">
      <IconButton
        variant="contained"
        onClick={undoLastStep}
        style={buttonStyle}
      >
        <UndoIcon />
      </IconButton>
    </Tooltip>
  );
};
