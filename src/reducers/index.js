import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { headerReducer } from "./headerReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  header: headerReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;
