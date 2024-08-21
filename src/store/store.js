import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice"
import themeSliceReducer from "./themeSlice"

const rootReducer = {
    authSliceReducer,
    themeSliceReducer
};

export const store = configureStore({
  reducer: rootReducer,
});
