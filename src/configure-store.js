import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./sagas";
import { loginRootSaga } from "~/containers/login/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
