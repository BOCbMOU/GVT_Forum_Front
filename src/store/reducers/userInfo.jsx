const userInfo = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return action.payload;
    case 'UPDATE_AVATAR':
      return {
        ...state,
        avatar: action.payload.avatar,
        updatedAt: action.payload.updatedAt,
      };
    case 'RESET_USER_INFO':
      return null;
    default:
      return state;
  }
};

export default userInfo;
