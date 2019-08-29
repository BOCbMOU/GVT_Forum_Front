const signOut = () => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('pageSize');
  dispatch({
    type: 'SIGN_OUT',
  });
};

export default signOut;
