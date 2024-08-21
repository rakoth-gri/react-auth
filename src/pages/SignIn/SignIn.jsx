import React from "react";
// components
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Typography, Box, Stack, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { Title } from "../../components/Title/Title";
// consts
import { SIGN_IN_LIST } from "../../consts/formList";
import { PATHS } from "../../consts/paths";

export const SignIn = () => {
  return (
    <Box component={"section"}>
      <Title title={"Авторизация"} />
      <Form
        list={SIGN_IN_LIST}
        action={"signIn"}
        label={"Зарегистрироваться"}
        to={`/${PATHS.signUp}`}
        icon={<AppRegistrationIcon />}
      />
    </Box>
  );
};
