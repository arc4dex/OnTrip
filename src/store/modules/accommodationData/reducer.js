import { SET_ACCOMMODATION_DATA } from "./actionsTypes";

const accommodationDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACCOMMODATION_DATA:
      return action.value;

    default:
      return state;
  }
};

export default accommodationDataReducer;
