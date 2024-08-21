import React from "react";
import { colors } from "@mui/material";
// components
import { Box } from "@mui/material";
import PulseLoader from "react-spinners/PulseLoader";

const SPINNER_PROPS = {
  color: colors.pink["300"],
  size: 40,
  "aria-label": "Loading Spinner",
  cssOverride: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
  },
};

export const Spinner = ({ loading }) => {
  return (
    <Box component="section">
      <PulseLoader        
        loading={loading}
        {...SPINNER_PROPS}
      />
    </Box>
  );
};
