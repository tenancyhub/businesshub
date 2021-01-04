import { combineReducers } from "redux";
import productReducer from "./productReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  product: productReducer,
  Auth: AuthReducer,
});
