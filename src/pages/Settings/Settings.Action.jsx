import axios from 'axios';
import { error, success } from 'react-notification-system-redux';

const updateAvatar = ({ token = '' }, avatar) => dispatch => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  axios
    .put(`users/self/avatar`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      if (response.status === 202) {
        const { payload } = response.data;
        dispatch({
          type: 'UPDATE_AVATAR',
          payload: payload.user,
        });
        dispatch(
          success({
            title: 'Avatar updated',
            position: 'tr',
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Update avatar failed!',
          message: err,
          position: 'tr',
        })
      );
    });
};

const getUserInfo = ({ token = '' }) => dispatch => {
  axios
    .get(`users/self`, {
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
          title: 'Get settings failed!',
          message: err,
          position: 'tr',
        })
      );
    });
};

const resetUserInfo = () => dispatch => {
  dispatch({
    type: 'RESET_USER_INFO',
  });
};

export { updateAvatar, getUserInfo, resetUserInfo };
