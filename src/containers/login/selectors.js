import { createSelector } from "reselect";

const selectLogin = (state) => state.login;

export const formStateSelector = createSelector(selectLogin, (state) => state);
