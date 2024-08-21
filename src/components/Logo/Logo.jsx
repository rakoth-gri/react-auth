import React from "react";
import { styled } from "@mui/material";
// components
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// const
import { PATHS } from "../../consts/paths";

const MyIconButton = styled(IconButton)(() => ({
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "inherit",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  width: "auto",
}));

export const Logo = () => {
  return (
    <MyIconButton component={Link} to={PATHS.home}>
      <LogoDevIcon fontSize="large" color={"error"} sx={{ m: "auto" }} />
    </MyIconButton>
  );
};
