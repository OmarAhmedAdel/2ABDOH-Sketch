import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useCanvas } from "./CanvasContext";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "258px",
};

export const DrawCanvasButton = () => {
  const { setIsErasing } = useCanvas();

  const handleDraw = () => {
    setIsErasing(false);
  };

  return (
    <Tooltip title="Draw">
      <IconButton variant="contained" onClick={handleDraw} style={buttonStyle}>
        <DrawOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};
