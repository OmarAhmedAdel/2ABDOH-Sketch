import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useCanvas } from "./CanvasContext";

const buttonStyle = {
  // position: "fixed",
  top: "2px",
  right: "268px", // Adjust position as needed
};

export const EraseCanvasButton = () => {
  const { setIsErasing } = useCanvas();

  const handleErase = () => {
    setIsErasing(true);
  };

  return (
    <Tooltip title="Erase">
      <IconButton
        variant="contained"
        onClick={handleErase}
        style={{ ...buttonStyle, filter: "brightness(0.4)" }}
      >
        <img
          src="/images/dev-icon-145.svg"
          alt="Erase Icon"
          style={{ width: "20px", height: "20px" }}
        />
      </IconButton>
    </Tooltip>
  );
};
