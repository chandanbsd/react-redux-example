const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "SIGN_OUT":
      return;
    default:
      return state;
  }
};

export default loggedReducer;
