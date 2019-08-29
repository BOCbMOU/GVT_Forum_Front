import axios from 'axios';
import { error } from 'react-notification-system-redux';
import { DEFAULT_PAGE_SIZE } from '../../consts';

const signInUser = user => dispatch => {
  axios
    .post('auth/sign-in', user)
    .then(response => {
      if (response && response.status === 200) {
        const { user } = response.data.payload;
        localStorage.setItem('token', user.token);
        localStorage.setItem(
          'pageSize',
          user.settings.pageSize || DEFAULT_PAGE_SIZE
        );

        dispatch({
          type: 'SIGN_IN_SUCCESS',
          payload: {
            token: user.token,
            settings: { pageSize: user.settings.pageSize || DEFAULT_PAGE_SIZE },
          },
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Sign In failed! Check email and password!',
          message: err.response.data.error,
          position: 'tr',
          autoDismiss: 5,
        })
      );
    });
};

export { signInUser };
