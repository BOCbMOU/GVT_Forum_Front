import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import categories from "./categories";
import user from "./user";

const rootReducer = combineReducers({
  notifications,
  categories,
  user
});

export default rootReducer;
