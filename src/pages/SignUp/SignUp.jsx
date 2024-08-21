import React from "react";
import LoginIcon from "@mui/icons-material/Login";
// components:
import { Typography, Box } from "@mui/material";
import { Form } from "../../components/Form/Form";
import { SIGN_UP_LIST } from "../../consts/formList";
import { Title } from "../../components/Title/Title";
// consts
import { PATHS } from "../../consts/paths";

export const SignUp = () => {
  return (
    <Box component={"section"}>
      <Title title={"Регистрация"} />
      <Form
        list={SIGN_UP_LIST}
        action={"signUp"}
        label={"войти"}
        to={`/${PATHS.signIn}`}
        icon={<LoginIcon />}
      />
    </Box>
  );
};
