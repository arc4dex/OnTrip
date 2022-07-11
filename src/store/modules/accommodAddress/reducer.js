import { SET_ADDRESS } from "./actionsTypes";

const accommodAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return action.value;

    default:
      return state;
  }
};

export default accommodAddressReducer;
