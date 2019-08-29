import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { error } from 'react-notification-system-redux';
import rootReducer from './reducers/';
import { DEFAULT_PAGE_SIZE } from '../consts';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// set server address
axios.defaults.baseURL = 'http://localhost:3001/api/v1/';

axios.interceptors.response.use(
  response => response,
  err => {
    let message = err.response.status,
      title = 'Something went wrong';

    if (err.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('pageSize');
      store.dispatch({
        type: 'SIGN_OUT',
      });
      message = err.response.data.error;
      title = 'Token expired';
    }

    store.dispatch(
      error({
        title,
        message,
        position: 'tc',
        autoDismiss: 5,
      })
    );
  }
);

const token = localStorage.getItem('token');
const pageSize = +localStorage.getItem('pageSize') || DEFAULT_PAGE_SIZE;

if (token) {
  store.dispatch({
    type: 'SIGN_IN_SUCCESS',
    payload: { token, settings: { pageSize } },
  });
}

export default store;
