import axios from 'axios';
import { error } from 'react-notification-system-redux';
import { DEFAULT_VIEW_CONTENT_AL } from '../../consts';

const addTopic = (
  { token = '' },
  { categoryId, title, message, viewAccessLevel = DEFAULT_VIEW_CONTENT_AL }
) => dispatch => {
  axios
    .post(
      `categories/${categoryId}`,
      { topic: { title, message, viewAccessLevel } },
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then(response => {
      if (response.status === 201) {
        const { payload } = response.data;
        dispatch({
          type: 'ADD_TOPIC',
          payload: payload.topic._id,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Add topic failed!',
          message: err.response.status,
          position: 'tr',
        })
      );
    });
};

export { addTopic };
