import { combineReducers } from "redux";
import userIsLoggedReducer from "../modules/userIsLogged/reducer";
import { userDataReducer } from "./userData/reducer";
import accommodAddressReducer from "./accommodAddress/reducer";

export const reducers = combineReducers({
  userState: userIsLoggedReducer,
  userData: userDataReducer,
  accommodAddress: accommodAddressReducer,
});
