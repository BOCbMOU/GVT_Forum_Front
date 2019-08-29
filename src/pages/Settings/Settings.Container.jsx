import { connect } from 'react-redux';
import { updateAvatar, getUserInfo, resetUserInfo } from './Settings.Action';
import Settings from './Settings';

const stateToProps = state => ({
  user: state.user,
  userInfo: state.userInfo,
});

export default connect(
  stateToProps,
  { updateAvatar, getUserInfo, resetUserInfo }
)(Settings);
