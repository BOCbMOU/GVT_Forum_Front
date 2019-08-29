import { connect } from 'react-redux';
import { getUserByName, resetUser } from './User.Action';
import User from './User';

const stateToProps = state => ({
  user: state.user,
  userInfo: state.userInfo,
});

export default connect(
  stateToProps,
  { getUserByName, resetUser }
)(User);
