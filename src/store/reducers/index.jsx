import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import categories from './categories';
import category from './category';
import topic from './topic';
import comments from './comments';
import user from './user';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  notifications,
  categories,
  category,
  topic,
  comments,
  user,
  userInfo,
});

export default rootReducer;
