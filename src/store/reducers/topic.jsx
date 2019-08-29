const topic = (
  // state = {}
  state = null,
  action
) => {
  switch (action.type) {
    case 'GET_TOPIC_BY_ID':
      return action.payload;
    case 'RESET_TOPIC':
      return null;
    case 'ADD_TOPIC':
      return action.payload;
    default:
      return state;
  }
};

export default topic;
