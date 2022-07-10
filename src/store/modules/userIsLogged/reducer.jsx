import { IS_LOGGED } from "./actionsTypes";

const userIsLoggedReducer = (
  state = localStorage.getItem("userToken") ? true : false,
  action
) => {
  switch (action.type) {
    case IS_LOGGED:
      return action.value;

    default:
      return state;
  }
};

export default userIsLoggedReducer;
