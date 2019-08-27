const categories = (state = [], action) => {
  switch (action.type) {
    case "GET_TOP_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

export default categories;
