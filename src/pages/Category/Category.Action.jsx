import axios from 'axios';
import { error } from 'react-notification-system-redux';

const getCategoryById = ({ token = '' }, categoryId) => dispatch => {
  axios
    .get(`categories/${categoryId}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: 'GET_CATEGORY_BY_ID',
          payload: payload.category,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get category by id failed!',
          message: err.response.status,
          position: 'tr',
        })
      );
    });
};

const getCategoryChildren = ({ token = '' }, categoryId) => dispatch => {
  axios
    .get(`categories/${categoryId}/children`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: 'GET_CATEGORY_CHILDREN',
          payload: payload.categories,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get category children failed!',
          message: err.response.status,
          position: 'tr',
        })
      );
    });
};

const getCategoryTopics = ({ token = '' }, categoryId, page) => dispatch => {
  axios
    .get(`categories/${categoryId}/topics/page_${page}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then(response => {
      if (response.status === 200) {
        const { payload } = response.data;
        dispatch({
          type: 'GET_CATEGORY_TOPICS',
          payload,
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Get category topics failed!',
          message: err.response.status,
          position: 'tr',
        })
      );
    });
};

const resetCategory = () => dispatch => {
  dispatch({
    type: 'RESET_CATEGORY',
  });
};

const resetTopics = () => dispatch => {
  dispatch({
    type: 'RESET_TOPICS',
  });
};

export {
  getCategoryById,
  getCategoryChildren,
  getCategoryTopics,
  resetCategory,
  resetTopics,
};
