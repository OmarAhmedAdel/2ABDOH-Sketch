import * as React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useCanvas } from "./CanvasContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { SelectStrokes } from "./Components/SelectStrokes";

const buttonStyle = {
  right: "226px",
};

const alertStyle = {
  position: "fixed",
  top: "80px",
  right: "20px",
  width: "180px",
  backgroundColor: "rgba(255, 0, 0, 0.1)",
};

export const RemoveSelectedStrokes = () => {
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
    const keptStrokes = Array.from(strokes).filter(
      (stroke, index) => index < start || index >= end
    );

    let newInkMLString = '<?xml version="1.0" encoding="ASCII"?>\n';
    newInkMLString += '<ink xmlns="http://www.w3.org/2003/InkML">\n';
    newInkMLString += '  <context inkSourceRef="Tablet PC"/>\n';
    newInkMLString += '  <captureDevice sampleRate="125">\n';
    newInkMLString += "    <channelList>\n";
    newInkMLString += '      <channelDef name="X"/>\n';
    newInkMLString += '      <channelDef name="Y"/>\n';
    newInkMLString += "    </channelList>\n";
    newInkMLString += "  </captureDevice>\n";

    for (const stroke of keptStrokes) {
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

  return (
    <>
      <Tooltip title="Remove Drawing">
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
          <RemoveCircleOutlineIcon />
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
        <SelectStrokes
          startStroke={startStroke}
          endStroke={endStroke}
          maxStrokes={maxStrokes}
          setStartStroke={setStartStroke}
          setEndStroke={setEndStroke}
          handleSet={handleSet}
          handleClear={handleClear}
          buttonLabel="Delete"
        />
      )}
    </>
  );
};
