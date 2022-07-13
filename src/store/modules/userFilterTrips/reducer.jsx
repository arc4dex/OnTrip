import { USER_SEARCH_TRIPS } from "./actionsTypes";

const userTripsSearchsReducer = (state = [], action) => {
  console.log(action.value)
  switch (action.type) {
    case USER_SEARCH_TRIPS:
      return action.value;

    default:
      return state;
  }
};

export default userTripsSearchsReducer;
