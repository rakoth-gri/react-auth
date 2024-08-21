import { useState } from "react";
import { useDispatch } from "react-redux";
// CAT RTK ------
import { signUpThunk, signInThunk } from "../store/thunks";

const cb = (list) =>
  list.slice(0, -1).reduce((a, i) => ({ ...a, [i.name]: "" }), {});

export const useForm = (list, action) => {
  const [state, setState] = useState(cb(list));
  const [invalidPass, setInvalidPass] = useState(false);
  const dispatch = useDispatch();

  const isDisabled = Object.values(state).some((v) => !v);

  const submitHandler = (e) => {
    e.preventDefault();

    // функционал для регистрации -----
    if (state.pass !== state.pass2 && action === "signUp") {
      return setInvalidPass(true);
    } else {
      setInvalidPass(false);
    }

    action === "signIn"
      ? dispatch(signInThunk({ action, data: state }))
      : dispatch(signUpThunk({ action, data: state }));
    //-----
    setTimeout(() => {
      setState(cb(list));
    }, 500);
  };

  const changeStateHandler = (e) =>
    setState((p) => ({ ...p, [e.target.name]: e.target.value }));

  return [state, submitHandler, changeStateHandler, isDisabled, invalidPass];
};
