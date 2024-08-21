import { styled } from "@mui/material/styles";
// components:
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";
import { Nav } from "../Nav/Nav";
import { Logo } from "../Logo/Logo";
import { AvatarComp } from "../Avatar/Avatar";
// css
import "./Layout.sass";

const MyAppBar = styled(AppBar)(() => ({
  m: "0px",
  color: "whitesmoke",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center',
  p: "0.5rem",
  position: "static",
}));

export const Layout = () => {
  return (
    <>
      <MyAppBar>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo />
        </Toolbar>
        <AvatarComp/>       
        <Nav />
      </MyAppBar>
      <Container maxWidth={"lg"} component={"main"}>
        <Outlet />
      </Container>
    </>
  );
};
