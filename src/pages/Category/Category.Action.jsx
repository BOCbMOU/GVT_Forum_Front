import axios from "axios";
import { error } from "react-notification-system-redux";

const getCategoryById = ({ token }, categoryId) => dispatch => {
  axios
    .get(`categories/${categoryId}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_CATEGORY_BY_ID",
          payload: payload.category
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get category by id failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

const getCategoryChildren = ({ token }, categoryId) => dispatch => {
  axios
    .get(`categories/${categoryId}/children`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_CATEGORY_CHILDREN",
          payload: payload.categories
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get category children failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

const getCategoryTopics = ({ token }, categoryId, page) => dispatch => {
  axios
    .get(`categories/${categoryId}/topics/page_${page}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      if (response && response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: "GET_CATEGORY_TOPICS",
          payload: payload.topics
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: "Get category topics failed!",
          message: err.response.error,
          position: "tc"
        })
      );
    });
};

export { getCategoryById, getCategoryChildren, getCategoryTopics };
