const topic = (
  // value: {}, comments: []
  state = { value: null, comments: null },
  action
) => {
  switch (action.type) {
    case "GET_TOPIC_BY_ID":
      return { ...state, value: action.payload };
    case "GET_TOPIC_COMMENTS":
      return { ...state, comments: action.payload };
    case "RESET_TOPIC":
      return { value: null, comments: null };
    default:
      return state;
  }
};

export default topic;
