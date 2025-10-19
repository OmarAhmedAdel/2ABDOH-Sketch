import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RedoIcon from "@mui/icons-material/Redo";
import { useCanvas } from "./CanvasContext";
import { buttonStyle } from "../Components/ButtonStyles";

export const RedoCanvasButton = () => {
  const { redoLastStep } = useCanvas();

  return (
    <Tooltip title="Redo">
      <IconButton
        variant="contained"
        onClick={redoLastStep}
        style={buttonStyle(250)}
      >
        <RedoIcon />
      </IconButton>
    </Tooltip>
  );
};
