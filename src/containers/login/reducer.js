import produce from "immer";
import { handleActions } from "redux-actions";
import { SET_DATA_FORM_REDUCER } from "./constants";

const initialState = {
  form: {
    email: "",
    password: "",
  },
  confirmationPassword: "",
  emailValid: true,
  passwordValid: true,
  usernameValid: true,
  confirmationPasswordValid: true,

  usernameInput: "",
};

/* eslint-disable default-case, no-param-reassign */
const setDataForm = (state, { payload }) =>
  produce(state, (draft) => {
    draft.form = payload;
  });

export default loginReducer = handleActions(
  {
    [SET_DATA_FORM_REDUCER]: setDataForm,
  },
  initialState
);
