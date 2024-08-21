import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/authSlice";
// components
import { Link } from "react-router-dom";
import { List, Box, ListItemText, ListItem } from "@mui/material";
// consts
import { PRIVATE_MENU_LIST, PUBLIC_MENU_LIST } from "../../consts/menuList";
import { PATHS } from "../../consts/paths";
import "./Nav.sass";

export const Nav = () => {
  const [path, setPath] = useState(location.pathname);
  const auth = useSelector((state) => state.authSliceReducer.auth);

  const dispatch = useDispatch();

  return (
    <Box sx={{ p: "0.5rem" }} component={"nav"}>
      <List
        component={"ul"}
        sx={{
          listStylePosition: "inside",
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {auth ? (
          <>
            {PRIVATE_MENU_LIST.map(({ to, text }) => (
              <ListItem component={"li"} key={text} sx={{ width: "auto" }}>
                <ListItemText>
                  <Link
                    to={to}
                    className={path === to ? "active" : ""}
                    onClick={() => setPath(to)}
                    style={{fontSize: '1.15em'}}
                  >
                    {text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
            <ListItem component={"li"} sx={{ width: "auto" }}>
              <ListItemText>
                <Link
                  to={PATHS.home}
                  className={'signOut'}
                  onClick={() => dispatch(signOut())}
                  style={{fontSize: '1.15em'}}
                >
                  Выйти
                </Link>
              </ListItemText>
            </ListItem>
          </>
        ) : (
          PUBLIC_MENU_LIST.map(({ to, text }) => (
            <ListItem component={"li"} key={text} sx={{ width: "auto" }}>
              <ListItemText>
                <Link
                  to={to}
                  className={path === to ? "active" : ""}
                  onClick={() => setPath(to)}
                  style={{fontSize: '1.15em'}}
                >
                  {text}
                </Link>
              </ListItemText>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};
