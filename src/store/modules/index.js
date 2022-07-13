import { combineReducers } from "redux";
<<<<<<< HEAD
import  userIsLoggedReducer  from "../modules/userIsLogged/reducer";
import userTripsSearchsReducer from "./userFilterTrips/reducer";

export const reducers = combineReducers({
    userState: userIsLoggedReducer,
    userTripsSearch: userTripsSearchsReducer
=======
import userIsLoggedReducer from "../modules/userIsLogged/reducer";
import { userDataReducer } from "./userData/reducer";
import accommodAddressReducer from "./accommodAddress/reducer";

export const reducers = combineReducers({
  userState: userIsLoggedReducer,
  userData: userDataReducer,
  accommodAddress: accommodAddressReducer,
>>>>>>> 4f6405c38501f0f9e02fcc0f8b7c53bfe7d2c802
});
