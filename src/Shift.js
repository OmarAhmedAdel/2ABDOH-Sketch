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

const StyledButton = styled("button")(
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
  const [shiftValue, setShiftValue] = React.useState(1);

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

  const applyShifts = (deltaX, deltaY) => {
    const inkMLString = localStorage.getItem("openedFileContent");
    if (!inkMLString) return;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(inkMLString, "application/xml");

    const traces = xmlDoc.getElementsByTagName("trace");

    for (let i = startStroke - 1; i < endStroke; i++) {
      const trace = traces[i];
      const traceData = trace.textContent.trim().split(",");

      const shiftedTraceData = traceData
        .map((coordPair) => coordPair.trim().split(" "))
        .map(([x, y]) => {
          const newX = parseFloat(x) + deltaX;
          const newY = parseFloat(y) + deltaY;
          return `${newX} ${newY}`;
        })
        .join(",");

      trace.textContent = shiftedTraceData;
      trace.setAttribute("shift", `${shiftX + deltaX} ${shiftY + deltaY}`);
    }

    const serializer = new XMLSerializer();
    const updatedInkMLString = serializer.serializeToString(xmlDoc);
    localStorage.setItem("openedFileContent", updatedInkMLString);
    drawInkml(updatedInkMLString);

    setShiftX(shiftX + deltaX);
    setShiftY(shiftY + deltaY);
  };

  const incrementShiftX = () => applyShifts(shiftValue, 0);
  const decrementShiftX = () => applyShifts(-shiftValue, 0);
  const incrementShiftY = () => applyShifts(0, -shiftValue);
  const decrementShiftY = () => applyShifts(0, shiftValue);

  const handleClear = () => {
    setShowShift(false);
    setShowBox(false);
    setShiftX(0);
    setShiftY(0);
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
          handleSet={() => {
            setShowShift(true);
            setShowBox(false);
          }}
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
              marginBottom: "3px",
            }}
          >
            <IconButtonStyled onClick={incrementShiftY}>
              <KeyboardArrowUpIcon />
            </IconButtonStyled>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButtonStyled
              onClick={decrementShiftX}
              style={{ marginRight: "30px" }}
            >
              <KeyboardArrowLeftIcon />
            </IconButtonStyled>
            <IconButtonStyled onClick={incrementShiftX}>
              <KeyboardArrowRightIcon />
            </IconButtonStyled>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "3px",
            }}
          >
            <IconButtonStyled onClick={decrementShiftY}>
              <KeyboardArrowDownIcon />
            </IconButtonStyled>
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
        </div>
      )}
    </>
  );
};
