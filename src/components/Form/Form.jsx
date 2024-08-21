// hooks
import { useForm } from "../../hooks/myHooks";
import { useSelector } from "react-redux";
// components
import { Error } from "../Error/Error";
import { Box, TextField, Stack, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

export const Form = ({ list, action, label, to, icon }) => {
  const [state, submitHandler, changeStateHandler, isDisabled, invalidPass] =
    useForm(list, action);

  const { loading, error } = useSelector((s) => s.authSliceReducer);

  return (
    <Box
      component={"form"}
      onSubmit={submitHandler}
      sx={{ p: "1rem", width: "50%", m: "1rem auto", position: "relative" }}
    >
      <Spinner loading={loading} />
      {list.map(({ id, ...props }, i) => (
        <TextField
          sx={{
            color: "teal",
            m: "0.5rem",
            background: i + 1 === list.length ? "brown" : "none",
            "&:disabled": { opacity: 0.5 },
          }}
          key={id}
          autoFocus={!i && true}
          color={"primary"}
          fullWidth
          size="medium"
          value={state[props.name]}
          {...props}
          onChange={changeStateHandler}
          disabled={isDisabled && props.type === "submit"}
        />
      ))}
      {invalidPass && <Error message={"Пароли не совпадают!"} />}
      {error && <Error message={error} />}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: "auto",
          justifyContent: "flex-end",
          mt: "1rem",
        }}
      >
        <Chip
          icon={icon}
          size="small"
          label={label}
          color="primary"
          variant={"outlined"}
          component={Link}
          to={to}
          sx={{
            cursor: "pointer",
            width: "auto",
            p: "0.5rem",
            fontFamily: "Montserrat",
          }}
        />
      </Stack>
    </Box>
  );
};
