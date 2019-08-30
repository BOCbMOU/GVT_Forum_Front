const category = (
  // value: {}, children: [], topics: [], numberOfPages: Number
  state = { value: null, children: null, topics: null, numberOfPages: null },
  action
) => {
  switch (action.type) {
    case 'GET_CATEGORY_BY_ID':
    case 'ADD_CATEGORY':
      return { ...state, value: action.payload };
    case 'GET_CATEGORY_CHILDREN':
      return { ...state, children: action.payload };
    case 'GET_CATEGORY_TOPICS':
      return {
        ...state,
        topics: action.payload.topics,
        numberOfPages: action.payload.numberOfPages,
      };
    case 'RESET_CATEGORY':
      return { value: null, children: null, topics: null };
    case 'RESET_TOPICS':
      return { ...state, topics: null, numberOfPages: null };
    default:
      return state;
  }
};

export default category;
