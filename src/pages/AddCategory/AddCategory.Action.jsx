import axios from 'axios';
import { error } from 'react-notification-system-redux';
import { DEFAULT_VIEW_CONTENT_AL } from '../../consts';

const addCategory = (
  { token = '' },
  {
    name,
    description = '',
    parentCategoryId = null,
    viewAccessLevel = DEFAULT_VIEW_CONTENT_AL,
  }
) => dispatch => {
  axios
    .post(
      `categories`,
      { category: { name, description, parentCategoryId, viewAccessLevel } },
      { headers: { authorization: `Bearer ${token}` } }
    )
    .then(response => {
      if (response.status === 201) {
        const { payload } = response.data;
        dispatch({
          type: 'ADD_CATEGORY',
          payload: { ...payload.category, isAdded: true },
        });
      }
    })
    .catch(err => {
      dispatch(
        error({
          title: 'Add category failed!',
          message: err.response.status,
          position: 'tr',
        })
      );
    });
};

export { addCategory };
