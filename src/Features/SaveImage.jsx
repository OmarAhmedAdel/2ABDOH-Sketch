import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useCanvas } from "./CanvasContext";
import { buttonStyle } from "../Components/ButtonStyles";

export const SaveCanvasButton = () => {
  const { canvasRef } = useCanvas();

  const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "Sketch.png";
    document.body.appendChild(anchor);

    // Trigger the anchor click to begin download
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  return (
    <Tooltip title="Save As Image">
      <IconButton
        onClick={handleSave}
        style={buttonStyle(-30)}
        aria-label="Save as Image"
      >
        <SaveIcon />
      </IconButton>
    </Tooltip>
  );
};
