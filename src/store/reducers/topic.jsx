const topic = (
  // value: {}, comments: []
  state = { value: null, comments: null, numberOf: null },
  action
) => {
  switch (action.type) {
    case 'GET_TOPIC_BY_ID':
      return { ...state, value: action.payload };
    case 'GET_TOPIC_COMMENTS':
      return {
        ...state,
        comments: action.payload.comments,
        numberOf: action.payload.numberOf,
      };
    case 'RESET_TOPIC':
      return { value: null, comments: null, numberOf: null };
    default:
      return state;
  }
};

export default topic;
