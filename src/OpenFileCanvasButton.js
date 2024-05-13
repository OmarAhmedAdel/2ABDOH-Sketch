import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { useCanvas } from "./CanvasContext";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const buttonStyle = {
  // position: "fixed",
  // top: "20px",
  right: "230px", // previously it was 295px
};

export const OpenFileCanvasButton = () => {
  const { drawInkml } = useCanvas();
  const [errorMessage, setErrorMessage] = useState(null);
  const timeoutRef = useRef(null);

  const clearErrorMessage = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleFileSelection = (event) => {
    clearErrorMessage();
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      const extension = fileName.split(".").pop().toLowerCase();
      if (extension !== "inkml") {
        setErrorMessage(
          "Unsupported file format. Please select an .inkml file."
        );
        timeoutRef.current = setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        return;
      }

      const reader = new FileReader();
      reader.onload = function (event) {
        const inkmlContent = event.target.result;
        drawInkml(inkmlContent);
      };
      reader.onerror = function () {
        setErrorMessage("Error reading file.");
      };
      reader.onloadend = function () {
        event.target.value = "";
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      {errorMessage && (
        <Alert
          severity="error"
          style={{ position: "fixed", top: "50px", right: "20px" }}
        >
          {errorMessage}
        </Alert>
      )}
      <input
        type="file"
        accept=".inkml"
        onChange={handleFileSelection}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <IconButton
          variant="contained"
          aria-label="open file"
          style={buttonStyle}
          component="span"
          title="Open inkml File"
        >
          <FileOpenIcon />
        </IconButton>
      </label>
    </>
  );
};
