import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;