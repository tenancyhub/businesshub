import { combineReducers } from "redux";
import productReducer from "./productReducer";
import AuthReducer from "./AuthReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Auth"],
};

const rootReducer = combineReducers({
  product: productReducer,
  Auth: AuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
