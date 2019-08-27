const signOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: "SIGN_OUT"
  });
};

export default signOut;
