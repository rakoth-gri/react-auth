import React from "react";
import { useSelector } from "react-redux";
// components
import { Avatar, Stack, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const SX_STACK_AVATAR = {
  fontSize: "1.15em",
  alignItems: "center",
  width: "auto",
  textTransform: 'uppercase'
};

export const AvatarComp = () => {
  const login = useSelector((s) => s.authSliceReducer.login);

  return (
    <Stack
      component="section"
      direction="row"
      spacing={2}
      sx={SX_STACK_AVATAR}
    >
      <Avatar sx={{}} variant="rounded">
        <PersonIcon fontSize="large" color={"success"} />
      </Avatar>
      <Box>{login}</Box>
    </Stack>
  );
};
