import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/";
import axios from "axios";
import { error as errorNotification } from "react-notification-system-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// set server address
axios.defaults.baseURL = "http://localhost:3001/api/v1/";

axios.interceptors.response.use(
  response => response,
  error => {
    let message = error.response.status,
      title = "Something went wrong";

    if (error.response.status === 401) {
      localStorage.removeItem("user");
      store.dispatch({
        type: "SIGN_OUT"
      });
      message = error.response.data.error;
      title = "Token expired";
    }

    store.dispatch(
      errorNotification({
        title,
        message,
        position: "tc",
        autoDismiss: 5
      })
    );
  }
);

const token = localStorage.getItem("token");

if (token) {
  store.dispatch({
    type: "SIGN_IN_SUCCESS",
    payload: { token }
  });
}

export default store;
