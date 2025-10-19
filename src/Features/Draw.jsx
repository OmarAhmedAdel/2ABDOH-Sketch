import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useCanvas } from "./CanvasContext";
import { buttonStyle } from "../Components/ButtonStyles";

export const DrawCanvasButton = () => {
  const { setIsErasing } = useCanvas();

  const handleDraw = () => {
    setIsErasing(false);
  };

  return (
    <Tooltip title="Draw">
      <IconButton
        variant="contained"
        onClick={handleDraw}
        style={buttonStyle(258)}
      >
        <DrawOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};
