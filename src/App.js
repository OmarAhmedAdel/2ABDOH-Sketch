import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { ClearCanvasButton } from "./Features/Clear";
import { SaveCanvasButton } from "./Features/SaveImage";
import { SaveFileCanvasButton } from "./Features/SaveFile";
import { OpenFileCanvasButton } from "./Features/OpenFile";
import { UndoCanvasButton } from "./Features/Undo";
import { RedoCanvasButton } from "./Features/Redo";
import { DrawCanvasButton } from "./Features/Draw";
import { EraseCanvasButton } from "./Features/Erase";
import { CropFile } from "./Features/CropFile";
import { RemoveSelectedStrokes } from "./Features/Delete";
import { Shift } from "./Features/Shift";
import { CopyPaste } from "./Features/CopyPaste";
import { Canvas } from "./Features/Canvas";

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
          <Shift />
          <CopyPaste />
        </Toolbar>
      </AppBar>
      <Canvas />
    </>
  );
}

export default App;
