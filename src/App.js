import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { ClearCanvasButton } from "./Clear";
import { SaveCanvasButton } from "./SaveImage";
import { SaveFileCanvasButton } from "./SaveFile";
import { OpenFileCanvasButton } from "./OpenFile";
import { UndoCanvasButton } from "./Undo";
import { RedoCanvasButton } from "./Redo";
import { DrawCanvasButton } from "./Draw";
import { EraseCanvasButton } from "./Erase";
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
