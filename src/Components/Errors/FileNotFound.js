import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { styled } from "@mui/system";

const alertStyle = {
  position: "fixed",
  top: "80px",
  right: "20px",
  width: "180px",
  backgroundColor: "rgba(255, 0, 0, 0.1)",
};

const StyledAlert = styled(Alert)(({ theme }) => ({
  ...alertStyle,
}));

export const FileNotFound = ({ showAlert }) => {
  return (
    showAlert && (
      <StyledAlert severity="error" variant="outlined">
        <AlertTitle>Error</AlertTitle>
        No File Found!
      </StyledAlert>
    )
  );
};
