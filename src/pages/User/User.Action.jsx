import axios from 'axios';
import { error } from 'react-notification-system-redux';

const getUserByName = ({ token = '' }, username) => dispatch => {
  axios
    .get(`users/${username}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: 'GET_USER_INFO',
          payload: payload.user,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get user info failed!',
          message: err,
          position: 'tr',
        })
      );
    });
};

const resetUser = () => dispatch => {
  dispatch({
    type: 'RESET_USER_INFO',
  });
};

export { getUserByName, resetUser };
