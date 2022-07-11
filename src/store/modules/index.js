import { combineReducers } from "redux";
import userIsLoggedReducer from "../modules/userIsLogged/reducer";
import accommodAddressReducer from "./accommodAddress/reducer";

export const reducers = combineReducers({
  userState: userIsLoggedReducer,
  accommodAddress: accommodAddressReducer,
});
