import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useCanvas } from "./CanvasContext";
import { buttonStyle } from "../Components/ButtonStyles";

export const EraseCanvasButton = () => {
  const { setIsErasing } = useCanvas();

  const handleErase = () => {
    setIsErasing(true);
  };

  return (
    <Tooltip title="Erase">
      <IconButton
        variant="contained"
        onClick={handleErase}
        style={{ ...buttonStyle(268), filter: "brightness(0.4)" }}
      >
        <img
          src="/images/dev-icon-145.svg"
          alt="Erase Icon"
          style={{ width: "20px", height: "20px" }}
        />
      </IconButton>
    </Tooltip>
  );
};
