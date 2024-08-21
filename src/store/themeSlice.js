import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = themeSlice.actions;

export default themeSlice.reducer;
