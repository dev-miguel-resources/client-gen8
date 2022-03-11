import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { headerReducer } from "./headerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
});

export default rootReducer;
