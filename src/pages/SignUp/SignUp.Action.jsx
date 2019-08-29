import axios from 'axios';
import { success, error } from 'react-notification-system-redux';

const signUpUser = user => dispatch => {
  axios
    .post('auth/sign-up', { user })
    .then(response => {
      if (response.status === 201) {
        dispatch({
          type: 'SIGN_UP_SUCCESS',
        });
        dispatch(
          success({
            title: 'Sign Up success',
            message: 'Check your email to confirm your user status!',
            position: 'tr',
            autoDismiss: 5,
          })
        );
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Sign Up failed',
          message: err.response.data.error,
          position: 'tr',
        })
      );
    });
};

export { signUpUser };
