import * as React from "react";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useCanvas } from "../Features/CanvasContext";
import { SelectStrokes } from "../Components/SelectStrokes";
import { FileNotFound } from "../Components/Errors/FileNotFound";

const buttonStyle = {
  right: "215px",
};

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
    // setShowBox(false);
  };

  const handleClear = () => {
    setShowBox(false);
  };

  return (
    <>
      <Tooltip title="Crop Drawings">
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
      <FileNotFound showAlert={showAlert} />
      {showBox && (
        <SelectStrokes
          startStroke={startStroke}
          endStroke={endStroke}
          maxStrokes={maxStrokes}
          setStartStroke={setStartStroke}
          setEndStroke={setEndStroke}
          handleSet={handleSet}
          handleClear={handleClear}
          buttonLabel="Crop"
        />
      )}
    </>
  );
};
