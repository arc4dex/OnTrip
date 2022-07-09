import { combineReducers } from "redux";
import  userIsLoggedReducer  from "../modules/userIsLogged/reducer";

export const reducers = combineReducers({
    userState: userIsLoggedReducer,
});
