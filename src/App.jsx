import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "./App.sass";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home/Home";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes/routes";

function App() {
  const auth = useSelector((s) => s.authSliceReducer.auth);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <>
          <Route index element={<Home/>} />
          {!auth
            ? PUBLIC_ROUTES.map(({ path, Element }) => (
                <Route path={path} element={<Element />} key={path} />
              ))
            : PRIVATE_ROUTES.map(({ path, Element }) => (
                <Route path={path} element={<Element />} key={path} />
              ))}
        </>
      </Route>
    </Routes>
  );
}

export default App;
