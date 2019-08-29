const comments = (
  // value: [], numberOfPages: Number
  state = { value: null, numberOfPages: null },
  action
) => {
  switch (action.type) {
    case 'GET_COMMENTS_BY_TOPIC_ID':
      return action.payload;
    case 'ADD_COMMENT':
      return { ...state, value: [...(state.value || []), action.payload] };
    case 'RESET_COMMENTS':
      return { value: null, numberOfPages: null };
    default:
      return state;
  }
};

export default comments;
