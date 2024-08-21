import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk, signInThunk } from "./thunks";

const initialState = {
  loading: 0,
  error: "",
  data: [],
  auth: false,
  login: "guest",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state, { payload }) {
      state.auth = false;
      state.login = "guest";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.login = payload.login;
        state.loading = false;
        state.error = "";
        state.auth = true;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      // -----------------------------------------------------------
      .addCase(signInThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.login = payload.login;
        state.loading = false;
        state.error = "";
        state.auth = true;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { signOut } = authSlice.actions;

export default authSlice.reducer;
