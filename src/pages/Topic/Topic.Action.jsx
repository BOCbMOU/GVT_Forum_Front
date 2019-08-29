import axios from 'axios';
import { error } from 'react-notification-system-redux';

const getTopicById = ({ token = '' }, topicId) => dispatch => {
  axios
    .get(`topics/${topicId}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: 'GET_TOPIC_BY_ID',
          payload: payload.topic,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get topic by id failed!',
          message: err,
          position: 'tr',
        })
      );
    });
};

const resetTopic = () => dispatch => {
  dispatch({
    type: 'RESET_TOPIC',
  });
};

export { getTopicById, resetTopic };
