import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { SaveCanvasButton } from "./SaveCanvasButton";
import { SaveFileCanvasButton } from "./SaveFileCanvasButton";
import { OpenFileCanvasButton } from "./OpenFileCanvasButton";
import { UndoCanvasButton } from "./UndoCanvasButton";
import { RedoCanvasButton } from "./RedoCanvasButton";
import { DrawCanvasButton } from "./DrawCanvasButton";
import { EraseCanvasButton } from "./EraseCanvasButton";
import { CropFile } from "./CropFile";
import { RemoveSelectedStrokes } from "./Delete";
import { Canvas } from "./Canvas";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img
            src="/images/Sketch Logo.png"
            alt="Sketch Logo"
            style={{ marginRight: "100px", width: "100px", height: "70px" }}
          />
          <ClearCanvasButton />
          <SaveCanvasButton />
          <SaveFileCanvasButton />
          <OpenFileCanvasButton />
          <UndoCanvasButton />
          <RedoCanvasButton />
          <DrawCanvasButton />
          <EraseCanvasButton />
          <CropFile />
          <RemoveSelectedStrokes />
        </Toolbar>
      </AppBar>
      <Canvas />
    </>
  );
}

export default App;
