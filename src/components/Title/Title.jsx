import React from "react";
import { Typography } from "@mui/material";

const TitleProps = {
  component: "h1",
  align: "center",
  variant: "h4",
  fontFamily: "Montserrat",
  fontWeight: 400,
  margin: "1rem 0px",
  textTransform: "uppercase",
};

export const Title = ({ title }) => {
  return (
    <>
      <Typography {...TitleProps}> {title}</Typography>
    </>
  );
};
