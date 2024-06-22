import * as React from "react";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Button from "@mui/material/Button";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import { useCanvas } from "./CanvasContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const buttonStyle = {
  right: "215px",
};

const alertStyle = {
  position: "fixed",
  top: "80px",
  right: "20px",
  width: "180px",
  backgroundColor: "rgba(255, 0, 0, 0.1)",
};

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

export const CropFile = () => {
  const { drawInkml } = useCanvas();
  const [startStroke, setStartStroke] = React.useState(1);
  const [endStroke, setEndStroke] = React.useState(1);
  const [maxStrokes, setMaxStrokes] = React.useState(1);
  const [showBox, setShowBox] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

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

    let newInkMLString = '<?xml version="1.0" encoding="ASCII"?>\n';
    newInkMLString += '<ink xmlns="http://www.w3.org/2003/InkML">\n';
    newInkMLString += '  <context inkSourceRef="Tablet PC"/>\n';
    newInkMLString += '  <captureDevice sampleRate="125">\n';
    newInkMLString += "    <channelList>\n";
    newInkMLString += '      <channelDef name="X"/>\n';
    newInkMLString += '      <channelDef name="Y"/>\n';
    newInkMLString += "    </channelList>\n";
    newInkMLString += "  </captureDevice>\n";

    for (const stroke of extractedStrokes) {
      newInkMLString += stroke.outerHTML + "\n";
    }

    newInkMLString += "</ink>";

    localStorage.setItem("openedFileContent", newInkMLString);
    drawInkml(newInkMLString);

    setShowBox(false);
  };

  const handleClear = () => {
    setShowBox(false);
  };

  const handleStartStrokeChange = (value) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= endStroke) {
      setStartStroke(parsedValue);
    }
  };

  const handleEndStrokeChange = (value) => {
    const parsedValue = parseInt(value);
    if (
      !isNaN(parsedValue) &&
      parsedValue >= startStroke &&
      parsedValue <= maxStrokes
    ) {
      setEndStroke(parsedValue);
    }
  };

  const incrementStartStroke = () => {
    if (startStroke < endStroke) {
      setStartStroke(startStroke + 1);
    }
  };

  const decrementStartStroke = () => {
    if (startStroke > 1) {
      setStartStroke(startStroke - 1);
    }
  };

  const incrementEndStroke = () => {
    if (endStroke < maxStrokes) {
      setEndStroke(endStroke + 1);
    }
  };

  const decrementEndStroke = () => {
    if (endStroke > startStroke) {
      setEndStroke(endStroke - 1);
    }
  };

  return (
    <>
      <Tooltip title="Crop File">
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
          <CropOutlinedIcon />
        </IconButton>
      </Tooltip>
      {showAlert && (
        <div style={{ ...alertStyle }}>
          <Alert severity="error" variant="outlined">
            <AlertTitle>Error</AlertTitle>
            No File Found!
          </Alert>
        </div>
      )}
      {showBox && (
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
          <div>
            <label
              htmlFor="startStroke"
              style={{ color: "blue", position: "Center" }}
            >
              <center>Start Stroke</center>
            </label>
            <StyledInputRoot>
              <IconButtonStyled onClick={decrementStartStroke}>
                <RemoveIcon />
              </IconButtonStyled>
              <StyledInput
                id="startStroke"
                value={startStroke}
                onChange={(e) => handleStartStrokeChange(e.target.value)}
                aria-label="Start Stroke"
                // min={1}
                // max={1000}
              />
              <IconButtonStyled onClick={incrementStartStroke}>
                <AddIcon />
              </IconButtonStyled>
            </StyledInputRoot>
          </div>
          <div>
            <label htmlFor="endStroke" style={{ color: "blue" }}>
              <center>End Stroke</center>
            </label>
            <StyledInputRoot>
              <IconButtonStyled onClick={decrementEndStroke}>
                <RemoveIcon />
              </IconButtonStyled>
              <StyledInput
                id="endStroke"
                value={endStroke}
                onChange={(e) => handleEndStrokeChange(e.target.value)}
                aria-label="End Stroke"
                // min={1}
                // max={1000}
              />
              <IconButtonStyled onClick={incrementEndStroke}>
                <AddIcon />
              </IconButtonStyled>
            </StyledInputRoot>
          </div>
          <div style={{ marginTop: "20px" }}>
            <StyledButton variant="contained" onClick={handleSet}>
              Crop
            </StyledButton>
          </div>
        </div>
      )}
    </>
  );
};
