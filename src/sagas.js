import { all, fork } from "redux-saga/effects";
import { loginRootSaga } from "./containers/login/saga";

function* rootSaga() {
  yield all([fork(loginRootSaga)]);
}

export default rootSaga;
