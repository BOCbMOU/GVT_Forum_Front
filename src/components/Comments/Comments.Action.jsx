import axios from 'axios';
import { error } from 'react-notification-system-redux';
import { DEFAULT_VIEW_CONTENT_AL } from '../../consts';

const addComment = (
  { token = '' },
  topicId,
  message,
  accessLevel = DEFAULT_VIEW_CONTENT_AL
) => dispatch => {
  axios
    .post(
      `topics/${topicId}/comments`,
      { comment: { message, accessLevel } },
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then(response => {
      if (response && response.status === 201) {
        const { comment } = response.data.payload;
        dispatch({
          type: 'ADD_COMMENT',
          payload: comment,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Add comment failed!',
          message: err.response.error,
          position: 'tc',
        })
      );
    });
};

const getCommentsByTopicId = ({ token = '' }, topicId, page) => dispatch => {
  axios
    .get(`topics/${topicId}/comments/page_${page}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response && response.status === 200) {
        const { comments, numberOfPages } = response.data.payload;
        dispatch({
          type: 'GET_COMMENTS_BY_TOPIC_ID',
          payload: { value: comments, numberOfPages },
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get topic comments failed!',
          message: err.response.error,
          position: 'tc',
        })
      );
    });
};

const resetComments = () => dispatch => {
  dispatch({
    type: 'RESET_COMMENTS',
  });
};

export { addComment, getCommentsByTopicId, resetComments };
