const initialState = JSON.parse(localStorage.getItem("user")) ||{};

export const userDataReducer = (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case "USER_LOGGED":
      return data;

    default:
      return state;
  }
};
