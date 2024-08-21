// Для совершения асинхронных действий в Redux (Запросы на сервер при регистрации, авторизации, запросе данных и т.п.)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Server } from "../server/server";
import { URL } from "../consts/api";


// ! регистрация -----
const signUpThunk = createAsyncThunk(
  "auth/signUpThunk",
  async ({ action, data }, { rejectWithValue }) => {
    const { login, pass } = data;

    try {
      let allUsers = await Server.getAllUsers(URL);

      if (typeof allUsers === "string") {
        throw new Error(allUsers);
      }

      if (allUsers.find((user) => user.login === login)) {
        throw new Error("Пользователь с такой почтой уже существует...");
      }

      const signUp = await Server[action](URL, { id: Date.now(), login, pass });
      if (typeof signUp === "string") {
        throw new Error(signUp);
      }

      return signUp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ! авторизация -----
const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async ({ action, data }, { rejectWithValue }) => {

    const { login, pass } = data;

    try {
      let allUsers = await Server.getAllUsers(URL);

      if (typeof allUsers === "string") {
        throw new Error(allUsers);
      }

      const user = allUsers.find((user) => user.login === login && user.pass === pass)

      if (!user) throw new Error("Пользователь с такой комбинацией логина и пароля не зарегистрирован!");
      
      return user
      
     
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { signUpThunk, signInThunk };
