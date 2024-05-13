import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCanvas } from "./CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "-130px", // -40px when having redo & undo buttons otherwise it is 20px // -70px is the new position // -100px // -130px
};

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas();

  const handleClearCanvas = () => {
    clearCanvas();

    localStorage.removeItem("openedFileContent");
  };

  return (
    <Tooltip title="Clear All">
      <IconButton
        onClick={handleClearCanvas}
        style={buttonStyle}
        aria-label="clear all"
      >
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
};
