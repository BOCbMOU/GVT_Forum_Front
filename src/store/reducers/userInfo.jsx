const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return action.payload;
    case 'RESET_USER_INFO':
      return {};
    default:
      return state;
  }
};

export default userInfo;
