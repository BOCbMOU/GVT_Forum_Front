const categories = (
  // value: {}, children: []
  state = { value: null, children: null },
  action
) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, value: action.payload };
    case "GET_CATEGORIES_CHILDREN":
      return { ...state, children: action.payload };
    case "RESET_CATEGORIES":
      return { value: null, children: null };
    default:
      return state;
  }
};

export default categories;
