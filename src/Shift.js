import * as React from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useCanvas } from "./CanvasContext";
import { SelectStrokes } from "./Components/SelectStrokes";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { FileNotFound } from "./Components/Errors/FileNotFound";

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    display: flex;
    align-items: center;
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 8px;
    padding: 5px;
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: none;
    width: 3rem;
    text-align: center;
    outline: 0;
    margin: 0 5px;
  `
);

const StyledButton = styled(Button)(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border-radius: 999px;
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    width: 100px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const IconButtonStyled = styled(IconButton)(
  ({ theme }) => `
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
  `
);

const buttonStyle = {
  right: "235px",
};

export const Shift = () => {
  const { drawInkml } = useCanvas();
  const [startStroke, setStartStroke] = React.useState(1);
  const [endStroke, setEndStroke] = React.useState(1);
  const [maxStrokes, setMaxStrokes] = React.useState(1);
  const [showBox, setShowBox] = React.useState(false);
  const [showShift, setShowShift] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [shiftX, setShiftX] = React.useState(0);
  const [shiftY, setShiftY] = React.useState(0);
  const [shifts, setShifts] = React.useState([]);
  const [shiftValue, setShiftValue] = React.useState(1);
  const [shiftIDCounter, setShiftIDCounter] = React.useState(1);

  React.useEffect(() => {
    const inkMLString = localStorage.getItem("openedFileContent");

    if (inkMLString) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(inkMLString, "text/xml");
      const strokes = xml.getElementsByTagName("trace");
      const strokeCount = strokes.length;

      setMaxStrokes(strokeCount);
      setStartStroke(1);
      setEndStroke(strokeCount);
    }
  }, []);

  const handleSet = () => {
    const inkMLString = localStorage.getItem("openedFileContent");

    if (!inkMLString) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }

    const parser = new DOMParser();
    const xml = parser.parseFromString(inkMLString, "text/xml");
    const strokes = xml.getElementsByTagName("trace");
    const start = parseInt(startStroke) - 1;
    const end = parseInt(endStroke);
    const extractedStrokes = Array.from(strokes).slice(start, end);

    let newShifts = [];
    extractedStrokes.forEach((stroke) => {
      newShifts.push({ id: stroke.getAttribute("id"), shiftX, shiftY });
    });

    setShifts([...shifts, ...newShifts]);
    setShowBox(false);
    setShowShift(true);
  };

  const applyShifts = () => {
    const inkMLString = localStorage.getItem("openedFileContent");
    if (!inkMLString) return;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(inkMLString, "application/xml");

    const traces = xmlDoc.getElementsByTagName("trace");

    for (let i = startStroke - 1; i < endStroke; i++) {
      const trace = traces[i];
      const traceData = trace.textContent.trim().split(",");

      // Apply shifts without altering the original coordinates
      const shiftedTraceData = traceData
        .map((coordPair) => coordPair.trim().split(" "))
        .map(([x, y]) => {
          const newX = parseFloat(x) + shiftX;
          const newY = parseFloat(y) + shiftY;
          console.log(`Original: (${x}, ${y}), Shifted: (${newX}, ${newY})`);
          return `${newX} ${newY}`;
        })
        .join(",");

      // Update the trace data with shifted coordinates
      trace.textContent = shiftedTraceData;

      const shiftId = `id${i + 1}`;
      // trace.setAttribute("shift", `${shiftId} ${shiftX} ${shiftY}`);
      trace.setAttribute("shift", `${shiftX} ${shiftY}`);
    }

    const serializer = new XMLSerializer();
    const updatedInkMLString = serializer.serializeToString(xmlDoc);
    localStorage.setItem("openedFileContent", updatedInkMLString);
    // console.log(updatedInkMLString);
    drawInkml(updatedInkMLString);
  };

  const resetShifts = () => {
    const inkMLString = localStorage.getItem("openedFileContent");
    if (!inkMLString) return;

    const parser = new DOMParser();
    const xml = parser.parseFromString(inkMLString, "text/xml");
    const strokes = xml.getElementsByTagName("trace");

    Array.from(strokes).forEach((stroke) => {
      stroke.removeAttribute("shift");
    });

    const serializer = new XMLSerializer();
    const newInkMLString = serializer.serializeToString(xml);
    localStorage.setItem("openedFileContent", newInkMLString);
    drawInkml(newInkMLString);
    setShiftIDCounter(1);
    setShiftX(0);
    setShiftY(0);
    setShifts([]);
    // setShowShift(false);
  };

  const incrementShiftX = () => setShiftX(shiftX + shiftValue);
  const decrementShiftX = () => setShiftX(shiftX - shiftValue);
  const incrementShiftY = () => setShiftY(shiftY - shiftValue);
  const decrementShiftY = () => setShiftY(shiftY + shiftValue);

  const handleClear = () => {
    setShowShift(false);
    setShowBox(false);
  };

  return (
    <>
      <Tooltip title="Shift Drawings">
        <IconButton
          onClick={() => {
            const inkMLString = localStorage.getItem("openedFileContent");
            if (!inkMLString) {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 5000);
              return;
            }
            setShowBox(true);
          }}
          style={{ ...buttonStyle }}
        >
          <SwapHorizIcon />
        </IconButton>
      </Tooltip>
      <FileNotFound showAlert={showAlert} />
      {showBox && (
        <SelectStrokes
          startStroke={startStroke}
          endStroke={endStroke}
          maxStrokes={maxStrokes}
          setStartStroke={setStartStroke}
          setEndStroke={setEndStroke}
          handleSet={handleSet}
          handleClear={() => setShowBox(false)}
          buttonLabel="Select"
        />
      )}
      {showShift && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            padding: "40px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tooltip title="Close">
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
                borderRadius: "50%",
                transition: "box-shadow 0.3s ease",
              }}
              onClick={handleClear}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(0, 0, 0, 0.4)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <ClearOutlinedIcon style={{ color: "red" }} />
            </div>
          </Tooltip>
          <Tooltip title="Go Back">
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                cursor: "pointer",
                borderRadius: "50%",
                transition: "box-shadow 0.3s ease",
              }}
              onClick={() => {
                setShowShift(false);
                setShowBox(true);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 10px rgba(0, 0, 0, 0.4)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <KeyboardBackspaceIcon style={{ color: "grey" }} />
            </div>
          </Tooltip>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IconButton onClick={incrementShiftY}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IconButton onClick={decrementShiftX}>
              <KeyboardArrowLeftIcon />
            </IconButton>
            <div>
              <label htmlFor="X-Value" style={{ color: "blue" }}>
                X:
              </label>
              <input
                type="number"
                value={shiftX}
                readOnly
                style={{ width: "50px", textAlign: "center", margin: "0 10px" }}
              />
              <label htmlFor="Y-Value" style={{ color: "blue" }}>
                Y:
              </label>
              <input
                type="number"
                value={shiftY}
                readOnly
                style={{ width: "50px", textAlign: "center", margin: "0 10px" }}
              />
            </div>
            <IconButton onClick={incrementShiftX}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IconButton onClick={decrementShiftY}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
          <div>
            <label htmlFor="shiftValue" style={{ color: "blue" }}>
              <center>Skip Value</center>
            </label>
            <StyledInputRoot>
              <IconButtonStyled
                onClick={() => setShiftValue(Math.max(1, shiftValue - 1))}
              >
                <RemoveIcon />
              </IconButtonStyled>
              <StyledInput
                id="shiftValue"
                value={shiftValue}
                onChange={(e) => setShiftValue(parseInt(e.target.value))}
                min="1"
                aria-label="Shift Value"
              />
              <IconButtonStyled onClick={() => setShiftValue(shiftValue + 1)}>
                <AddIcon />
              </IconButtonStyled>
            </StyledInputRoot>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <StyledButton variant="contained" onClick={resetShifts}>
              Reset
            </StyledButton>
            <StyledButton variant="contained" onClick={applyShifts}>
              Apply
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
};
