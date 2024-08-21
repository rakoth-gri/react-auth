import React from "react";
import { styled } from "@mui/material";
// components
import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";

const MyErrorTypography = styled(Typography)(() => ({
  color: "red",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: 'center'
}));

export const Error = ({message}) => {
  return (
    <MyErrorTypography component={"h3"} align="center" variant={"h6"}>
      <ErrorIcon color={"error"} fontSize="large" sx={{mr: '0.5rem'}}/> {message}
    </MyErrorTypography>
  );
};
