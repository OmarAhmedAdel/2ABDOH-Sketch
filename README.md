# 2ABDOH-Sketch

<p align="center">
  <img height="400" src="public/images/Sketch Logo.png">
</p>
A web application which allows to save sketchs as images and vector files. It's also able to manipulate data by using open, update, crop, redo, undo, erase, & clear all.

## Badges

![ReactJS](https://img.shields.io/badge/-React.Js-61DAFB?logo=react&logoColor=white&style=for-the-badge)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white)](https://www.javascript.com/)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com)
[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![CodePen](https://img.shields.io/badge/CodePen-black?style=for-the-badge&logo=CodePen)](https://codepen.io/trending)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io)
[![Youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com)
[![VSCode](https://img.shields.io/badge/VSCode-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcwLjkxMTkgOTkuNTcyM0M3Mi40ODY5IDEwMC4xODkgNzQuMjgyOCAxMDAuMTUgNzUuODcyNSA5OS4zODA3TDk2LjQ2MDQgODkuNDIzMUM5OC42MjQgODguMzc3MSAxMDAgODYuMTc2MiAxMDAgODMuNzYxNlYxNi4yMzkyQzEwMCAxMy44MjQ3IDk4LjYyNCAxMS42MjM4IDk2LjQ2MDQgMTAuNTc3NEw3NS44NzI1IDAuNjE5MDY3QzczLjc4NjIgLTAuMzg5OTkxIDcxLjM0NDYgLTAuMTQyODg1IDY5LjUxMzUgMS4xOTUyN0M2OS4yNTIgMS4zODYzNiA2OS4wMDI4IDEuNTk5ODUgNjguNzY5IDEuODM1MDJMMjkuMzU1MSAzNy45Nzk1TDEyLjE4NzIgMjQuODhDMTAuNTg5MSAyMy42NjA3IDguMzUzNjUgMjMuNzYwNiA2Ljg2OTM4IDI1LjExNzhMMS4zNjMwMiAzMC4xNTI1Qy0wLjQ1MjYwMyAzMS44MTI3IC0wLjQ1NDU4MyAzNC42ODM3IDEuMzU4NTQgMzYuMzQ2NkwxNi4yNDcxIDUwLjAwMDFMMS4zNTg1NCA2My42NTM2Qy0wLjQ1NDU4MyA2NS4zMTY0IC0wLjQ1MjYwMyA2OC4xODc2IDEuMzYzMDIgNjkuODQ3N0w2Ljg2OTM4IDc0Ljg4MjRDOC4zNTM2NSA3Ni4yMzk1IDEwLjU4OTEgNzYuMzQgMTIuMTg3MiA3NS4xMjAxTDI5LjM1NTEgNjIuMDIwN0w2OC43NjkgOTguMTY1MUM2OS4zOTI1IDk4Ljc5MjMgNzAuMTI0NiA5OS4yNjQ1IDcwLjkxMTkgOTkuNTcyM1pNNzUuMDE1MiAyNy4xODEzTDQ1LjEwOTIgNTAuMDAwMUw3NS4wMTUyIDcyLjgxODlWMjcuMTgxM1oiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBkPSJNOTYuNDYxNCAxMC41OTNMNzUuODU2NyAwLjYyMDg1QzczLjQ3MTcgLTAuNTMzNDM3IDcwLjYyMTUgLTAuMDQ2NTUwNiA2OC43NDk4IDEuODM0OTJMMS4yOTgzNCA2My42NTM1Qy0wLjUxNTkzNSA2NS4zMTY0IC0wLjUxMzg1MiA2OC4xODc1IDEuMzAyODEgNjkuODQ3Nkw2LjgxMjUgNzQuODgyM0M4LjI5NzcxIDc2LjIzOTUgMTAuNTM0NSA3Ni4zMzkgMTIuMTMzNSA3NS4xMjAxTDkzLjM2MDQgMTMuMThDOTYuMDg1NCAxMS4xMDIgMTAwIDEzLjA1NTcgMTAwIDE2LjQ5MzlWMTYuMjUzNUMxMDAgMTMuODQgOTguNjIzOSAxMS42NCA5Ni40NjE0IDEwLjU5M1oiIGZpbGw9IiNEOUQ5RDkiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZCkiPgo8cGF0aCBkPSJNOTYuNDYxNCA4OS40MDc0TDc1Ljg1NjcgOTkuMzc5N0M3My40NzE3IDEwMC41MzQgNzAuNjIxNSAxMDAuMDQ3IDY4Ljc0OTggOTguMTY1MUwxLjI5ODM0IDM2LjM0NjRDLTAuNTE1OTM1IDM0LjY4MzcgLTAuNTEzODUyIDMxLjgxMjUgMS4zMDI4MSAzMC4xNTI0TDYuODEyNSAyNS4xMTc3QzguMjk3NzEgMjMuNzYwNSAxMC41MzQ1IDIzLjY2MDYgMTIuMTMzNSAyNC44OEw5My4zNjA0IDg2LjgyMDFDOTYuMDg1NCA4OC44OTg1IDEwMCA4Ni45NDQ3IDEwMCA4My41MDYxVjgzLjc0N0MxMDAgODYuMTYwNCA5OC42MjM5IDg4LjM2MDMgOTYuNDYxNCA4OS40MDc0WiIgZmlsbD0iI0U2RTZFNiIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2QpIj4KPHBhdGggZD0iTTc1Ljg1NzggOTkuMzgwN0M3My40NzIxIDEwMC41MzUgNzAuNjIxOSAxMDAuMDQ3IDY4Ljc1IDk4LjE2NTFDNzEuMDU2NCAxMDAuNDgzIDc1IDk4Ljg0MTUgNzUgOTUuNTYzMVY0LjQzNzA5Qzc1IDEuMTU4NTIgNzEuMDU2NSAtMC40ODM0OTMgNjguNzUgMS44MzQ5MkM3MC42MjE5IC0wLjA0Njc2MTQgNzMuNDcyMSAtMC41MzQyNzYgNzUuODU3OCAwLjYxODk2M0w5Ni40NTgzIDEwLjU3NzNDOTguNjIyOSAxMS42MjM3IDEwMCAxMy44MjQ2IDEwMCAxNi4yMzkxVjgzLjc2MTZDMTAwIDg2LjE3NjIgOTguNjIyOSA4OC4zNzYxIDk2LjQ1ODMgODkuNDIzMUw3NS44NTc4IDk5LjM4MDdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5IiBvcGFjaXR5PSIwLjI1Ij4KPHBhdGggc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiIG9wYWNpdHk9IjAuMjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuODUwOCA5OS41NzIzQzcyLjQyNTggMTAwLjE4OSA3NC4yMjE4IDEwMC4xNSA3NS44MTE1IDk5LjM4MDdMOTYuNCA4OS40MjMxQzk4LjU2MzUgODguMzc3MSA5OS45Mzg2IDg2LjE3NjIgOTkuOTM4NiA4My43NjE2VjE2LjIzOTFDOTkuOTM4NiAxMy44MjQ3IDk4LjU2MzUgMTEuNjIzOSA5Ni40IDEwLjU3NzRMNzUuODExNSAwLjYxODk3NEM3My43MjUyIC0wLjM5MDA4NSA3MS4yODM1IC0wLjE0Mjg3MSA2OS40NTI1IDEuMTk1MThDNjkuMTkwOSAxLjM4NjM3IDY4Ljk0MTggMS41OTk3NiA2OC43MDc5IDEuODM0OTNMMjkuMjk0MSAzNy45Nzk1TDEyLjEyNjEgMjQuODhDMTAuNTI4IDIzLjY2MDYgOC4yOTI2IDIzLjc2MDUgNi44MDgzMyAyNS4xMTc3TDEuMzAxOTggMzAuMTUyNEMtMC41MTM1NCAzMS44MTI2IC0wLjUxNTYyNSAzNC42ODM3IDEuMjk3NSAzNi4zNDY1TDE2LjE4NiA1MEwxLjI5NzUgNjMuNjUzNkMtMC41MTU2MjUgNjUuMzE2NCAtMC41MTM1NCA2OC4xODc1IDEuMzAxOTggNjkuODQ3Nkw2LjgwODMzIDc0Ljg4MjRDOC4yOTI2IDc2LjIzOTUgMTAuNTI4IDc2LjMzOSAxMi4xMjYxIDc1LjEyMDFMMjkuMjk0MSA2Mi4wMjA3TDY4LjcwNzkgOTguMTY1MUM2OS4zMzE1IDk4Ljc5MjMgNzAuMDYzNSA5OS4yNjQ1IDcwLjg1MDggOTkuNTcyM1pNNzQuOTU0MiAyNy4xODEyTDQ1LjA0ODEgNTBMNzQuOTU0MiA3Mi44MTg4VjI3LjE4MTJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTYuMjUiIHk9Ii00LjE2NjY3IiB3aWR0aD0iMTEyLjUiIGhlaWdodD0iMTEyLjUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIyLjA4MzMzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuMTI1Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZCIgeD0iLTguMzk0MzYiIHk9IjE1LjY5NTEiIHdpZHRoPSIxMTYuNzI4IiBoZWlnaHQ9IjkyLjYzNzYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNC4xNjY2NyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im92ZXJsYXkiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMl9kIiB4PSI2MC40MTY3IiB5PSItOC4zMzM0NiIgd2lkdGg9IjQ3LjkxNjciIGhlaWdodD0iMTE2LjY2NyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0LjE2NjY3Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ib3ZlcmxheSIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI0OS45MzkiIHkxPSItNS4xOTc5MmUtMDUiIHgyPSI0OS45MzkiIHkyPSIxMDAuMDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)](https://code.visualstudio.com/)

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
- To select the strokes, users should first increase the end stroke before increasing the start stroke and the opposite when decreasing. This is to make sure that end stroke is not less than the start stroke & the start stroke is not greater than the end stroke.
- This feature improves editing precision and flexibility by enabling users to isolate and work with specific areas of their drawings. This can happen by clicking on the "Crop Drawings" icon.
![Crop](public/images/Gifs/Crop.gif)
</details>
<details>
  <summary> Remove Strokes From INKML Files </summary>

- Users can specify which strokes to remove, effectively removing unwanted elements while retaining the rest of the sketch.
- Unlike the "Crop Strokes" function, which saves selected strokes and removes the rest, "Remove Strokes" deletes selected strokes and preserves the remaining content.
- To select the strokes, users should first increase the end stroke before increasing the start stroke and the opposite when decreasing. This is to make sure that end stroke is not less than the start stroke & the start stroke is not greater than the end stroke.
- This feature offers enhanced flexibility in sketch editing by allowing users to refine their designs without starting over. This can happen by clicking on the "Remove Drawings" icon.
![Remove](public/images/Gifs/Remove.gif)
</details>
<details>
  <summary> Shift Strokes From INKML Files </summary>

- Users can select specific strokes and move them vertically or horizontally across the canvas boundaries.
- This can happen by defining the shift distance in increments or decrements, such as 10, 20, 30, or customize it further (e.g., 11, 22, 33) etc.
- To select the strokes, users should first increase the end stroke before increasing the start stroke and the opposite when decreasing. This is to make sure that end stroke is not less than the start stroke & the start stroke is not greater than the end stroke.
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
