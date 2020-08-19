import { combineReducers } from "redux";
import loginReducer from "./containers/login/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
