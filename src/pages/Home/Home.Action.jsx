import axios from "axios";
import { error } from "react-notification-system-redux";

const getTopCategories = ({ token }) => dispatch => {
  axios
    .get(`categories/`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_TOP_CATEGORIES",
          payload: payload.categories
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get top categories failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getTopCategories };
