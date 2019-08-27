import axios from "axios";
import { error } from "react-notification-system-redux";

const signInUser = user => dispatch => {
  axios
    .post("auth/sign-in", user)
    .then(response => {
      if (response && response.status === 200) {
        const { token } = response.data.payload;
        localStorage.setItem("token", token);

        dispatch({
          type: "SIGN_IN_SUCCESS",
          payload: { token }
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Sign In failed! Check email and password!",
          message: err.response.data.error,
          position: "tr",
          autoDismiss: 5
        })
      );
    });
};

export { signInUser };
