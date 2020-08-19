import { put, call, takeLatest, all } from "redux-saga/effects";

import { VALIDATION_FORM_LOGIN_WORKFLOW_START } from "./constants";

export function* signup(s) {
  alert("put your login here!");
}

export function* loginRootSaga() {
  yield takeLatest(VALIDATION_FORM_LOGIN_WORKFLOW_START, signup);
}
