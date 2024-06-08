# 2ABDOH-Sketch

<p align="center">
  <img height="400" src="public/images/Sketch Logo.png">
</p>
A web application which allows to save sketchs as images and vector files. It's also able to manipulate data by using open, update, crop, redo, undo, erase, & clear all.

## Features

<details>
  <summary> Draw The Strokes: </summary>
  
  - Using a mouse or a touch input, users can freely draw on the canvas.
  - The application records all the coordinates of the strokes made by the user as a sequence of vector coordinates (x and y) that show the course of the drawing.
  - These coordinates are kept in the RAM.
    ![Draw](public/images/Gifs/Draw.gif)
</details>
<details>
  <summary> Save As PNG: </summary>

  - The application turns all the content in the current canvas, including all drawn strokes, into a PNG image format when the user selects the "Save as image" icon.
</details>
<details>
  <summary> Save As INKML File: </summary>

  - The web app allows users to save sketches in Inkml format in addition to PNG. 
  - This is done by storing all the coordinates and other related information, converting the drawn strokes into an Inkml document by clicking on the "Save as Inkml" icon.​
</details>
<details>
  <summary> Open & Redraw INKML File: </summary>

  - By opening Inkml files using the "Open File" icon, the web app enables the users to view and edit previously saved sketches.
  - This happens by reading the Inkml content and redraws the saved vector coordinates after a file is selected. 
  - With such capability, users can continue working on their sketches or edit ones that already exist.​
</details>
<details>
  <summary> Update & Save in New File: </summary>

  - The web app allows to add new strokes to opened files in addition to redrawing already-existing designs.
  - After that, users can save the revised sketch as a new file, keeping both the added and original strokes.  
</details>
<details>
  <summary> Crop INKML File: </summary>

  - The sketch has a cropping function based on stroke counts to make selective editing or analyzing sketches easier.
  - Users can specify a range of strokes to be included in the cropped version of the sketch by entering the start and finish stroke numbers. 
  - This feature improves editing precision and flexibility by enabling users to isolate and work with specific areas of their drawings. This can happen by clicking on the "Crop File" icon.
</details>
<details>
  <summary> Undo & Redo: </summary>

  - Users can use the undo, redo, and erase features, as basic features among other crucial editing tools. 
  - Users can return to and undo actions to restore the drawing to its earlier states by using the undo function. 
  - On the other hand, users can reapply undone operations using the redo tool, which gives them more editing flexibility.
</details>
<details>
  <summary> Erase The Strokes: </summary>

  - To improve accuracy in corrections and modifications, users can also selectively erase portions of the sketch using the erase function. 
  - Erace can work when hovering on a drawing with no need at all for mouse input.
  - These actions are accessible by clicking on "Undo", "Redo", and "Erase" icons. Moreover, users can switch from erasing to drawing by clicking on the "Draw" icon and vice versa. 
</details>
<details>
  <summary> Clear All: </summary>
  
  - This is responsible for deleting all the strokes drawn on the sketch and removing any opened item in the RAM by clicking on the "Clear All" icon.
</details>
