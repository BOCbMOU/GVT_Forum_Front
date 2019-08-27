const user = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return action.payload;
    case "SIGN_OUT":
      return {};
    case "SIGN_UP_SUCCESS":
      return { isSignedUp: true };
    default:
      return state;
  }
};

export default user;
