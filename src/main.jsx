import { BrowserRouter as Umbrellla } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./App.jsx";
import "./index.sass";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <Umbrellla>
    <App />
  </Umbrellla>
  </Provider>
);
