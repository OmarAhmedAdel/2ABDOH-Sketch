import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import UndoIcon from "@mui/icons-material/Undo";
import { useCanvas } from "./CanvasContext";
import { buttonStyle } from "../Components/ButtonStyles";

export const UndoCanvasButton = () => {
  const { undoLastStep } = useCanvas();

  return (
    <Tooltip title="Undo">
      <IconButton
        variant="contained"
        onClick={undoLastStep}
        style={buttonStyle(240)}
      >
        <UndoIcon />
      </IconButton>
    </Tooltip>
  );
};
