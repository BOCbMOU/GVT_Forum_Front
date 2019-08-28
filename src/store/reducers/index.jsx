import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import categories from "./categories";
import category from "./category";
import user from "./user";

const rootReducer = combineReducers({
  notifications,
  categories,
  category,
  user
});

export default rootReducer;
