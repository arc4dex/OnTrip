import { combineReducers } from "redux";
import  userIsLoggedReducer  from "../modules/userIsLogged/reducer";
import userTripsSearchsReducer from "./userFilterTrips/reducer";

export const reducers = combineReducers({
    userState: userIsLoggedReducer,
    userTripsSearch: userTripsSearchsReducer
});
