import { combineReducers } from "redux";
import userIsLoggedReducer from "../modules/userIsLogged/reducer";
import { userDataReducer } from "./userData/reducer";
import accommodAddressReducer from "./accommodAddress/reducer";
import accommodationDataReducer from "./accommodationData/reducer";
import userTripsSearchsReducer from "../modules/userFilterTrips/reducer"

export const reducers = combineReducers({
  userState: userIsLoggedReducer,
  userData: userDataReducer,
  accommodAddress: accommodAddressReducer,
  accommodationData: accommodationDataReducer,
  userTripsSearch: userTripsSearchsReducer
});
