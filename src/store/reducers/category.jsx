const category = (
  // value: {}, children: [], topics: []
  state = { value: null, children: null, topics: null },
  action
) => {
  switch (action.type) {
    case "GET_CATEGORY_BY_ID":
      return { ...state, value: action.payload };
    case "GET_CATEGORY_CHILDREN":
      return { ...state, children: action.payload };
    case "GET_CATEGORY_TOPICS":
      return { ...state, topics: action.payload };
    case "RESET_CATEGORY":
      return { value: null, children: null, topics: null };
    default:
      return state;
  }
};

export default category;
