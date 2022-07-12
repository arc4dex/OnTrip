export const UserDataReducer = (state = [], action) => {
  const { user } = action;
  switch (action.type) {
    case "USER_LOGGED":
      return [...state, user];

    default:
      break;
  }
};
