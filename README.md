# 2ABDOH-Sketch

<p align="center">
  <img height="400" src="public/images/Sketch Logo.png">
</p>
A web application which allows to save sketchs as images and vector files. It's also able to manipulate data by using open, update, crop, redo, undo, erase, & clear all.

## Motivation

Bringing _convenience_, _speed_, and _ease of use_ to the sketch app is the primary objective.

The application 2ABDOH, which stands for 2D Arabic Based Dataset Of Handwritten Scripts, is a sketch app used as a tool to gather data with ease.

The aim here is to create a large and diverse Arabic Dataset that will help in further studies. The dataset & the Deep Learning model used are found in the repository for [Arabic Image Classifier Model](https://github.com/OmarAhmedAdel/Arabic-Image-Classifier-Model.git).

The logo depicts the freedom people can have to express their true thoughts about all the ideas they've, struggles they face, or dreams they want to achieve. It also indicates what people stand for: _Freedom_ & _Justice_

## Features

<details>
  <summary> Draw The Strokes </summary>
  
  - Using a mouse or a touch input, users can freely draw on the canvas.
  - The application records all the coordinates of the strokes made by the user as a sequence of vector coordinates (x and y) that show the course of the drawing.
  - These coordinates are kept in the RAM.
    ![Draw](public/images/Gifs/Draw.gif)
</details>
<details>
  <summary> Save As PNG </summary>

- The application turns all the content in the current canvas, including all drawn strokes, into a PNG image format when the user selects the "Save as image" icon.
![SaveAsImage](public/images/Gifs/SaveAsImage.gif)
</details>
<details>
  <summary> Save As INKML File </summary>

- The web app allows users to save sketches in Inkml format in addition to PNG.
- This is done by storing all the coordinates and other related information, converting the drawn strokes into an Inkml document by clicking on the "Save as Inkml" icon.​
![SaveAsFile](public/images/Gifs/SaveAsFile.gif)
</details>
<details>
  <summary> Open & Redraw INKML File </summary>

- By opening Inkml files using the "Open File" icon, the web app enables the users to view and edit previously saved sketches.
- This happens by reading the Inkml content and redraws the saved vector coordinates after a file is selected.
- With such capability, users can continue working on their sketches or edit ones that already exist.​
![OpenFile](public/images/Gifs/OpenFile.gif)
</details>
<details>
  <summary> Update & Save in New File </summary>

- The web app allows to add new strokes to opened files in addition to redrawing already-existing designs.
- After that, users can save the revised sketch as a new file, keeping both the added and original strokes.
![UpdateFile](public/images/Gifs/UpdateFile.gif)
</details>
<details>
  <summary> Crop Strokes From INKML Files </summary>

- The sketch has a cropping function based on stroke counts to make selective editing or analyzing sketches easier.
- Users can specify a range of strokes to be included in the cropped version of the sketch by entering the start and finish stroke numbers.
- This feature improves editing precision and flexibility by enabling users to isolate and work with specific areas of their drawings. This can happen by clicking on the "Crop Drawings" icon.
![Crop](public/images/Gifs/Crop.gif)
</details>
<details>
  <summary> Remove Strokes From INKML Files </summary>

- Users can specify which strokes to remove, effectively removing unwanted elements while retaining the rest of the sketch.
- Unlike the "Crop Strokes" function, which saves selected strokes and removes the rest, "Remove Strokes" deletes selected strokes and preserves the remaining content.
- This feature offers enhanced flexibility in sketch editing by allowing users to refine their designs without starting over. This can happen by clicking on the "Remove Drawings" icon.
![Remove](public/images/Gifs/Remove.gif)
</details>
<details>
  <summary> Shift Strokes From INKML Files </summary>

- Users can select specific strokes and move them vertically or horizontally across the canvas boundaries.
- This can happen by defining the shift distance in increments or decrements, such as 10, 20, 30, or customize it further (e.g., 11, 22, 33) etc.
- This capability improves the editing precision by enabling users to reposition parts of their sketches effectively. This can happen by clicking on the "Shift Drawings" icon.
![Shift](public/images/Gifs/Shift.gif)
</details>
<details>
  <summary> Undo & Redo </summary>

- Users can use the undo, redo, and erase features, as basic features among other crucial editing tools.
- Users can return to and undo actions to restore the drawing to its earlier states by using the undo function.
- On the other hand, users can reapply undone operations using the redo tool, which gives them more editing flexibility.
![Undo&Redo](public/images/Gifs/Undo&Redo.gif)
</details>
<details>
  <summary> Erase The Strokes </summary>

- To improve accuracy in corrections and modifications, users can also selectively erase portions of the sketch using the erase function.
- Erace can work when hovering on a drawing with no need at all for mouse input.
- These actions are accessible by clicking on "Undo", "Redo", and "Erase" icons. Moreover, users can switch from erasing to drawing by clicking on the "Draw" icon and vice versa.
![Erase](public/images/Gifs/Erase.gif)
</details>
<details>
  <summary> Clear All </summary>

- This is responsible for deleting all the strokes drawn on the sketch and removing any opened item in the RAM by clicking on the "Clear All" icon.
![ClearAll](public/images/Gifs/ClearAll.gif)
</details>

## Installation & Run the App

To install the project with `npm`, run the following commands in order.

```bash
> git clone https://github.com/OmarAhmedAdel/2ABDOH-Sketch.git
> cd src
> npm i
```

And to run the app, run the following command

```bash
> npm start
```
