import axios from "axios";
import { error } from "react-notification-system-redux";

const getTopicById = ({ token }, topicId) => dispatch => {
  axios
    .get(`topics/${topicId}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_TOPIC_BY_ID",
          payload: payload.topic
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get topic by id failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

const getTopicComments = ({ token }, topicId, page) => dispatch => {
  axios
    .get(`topics/${topicId}/comments/page_${page}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_TOPIC_COMMENTS",
          payload: payload.comments
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get topic comments failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

const resetTopic = () => dispatch => {
  dispatch({
    type: "RESET_TOPIC"
  });
};

export { getTopicById, getTopicComments, resetTopic };
