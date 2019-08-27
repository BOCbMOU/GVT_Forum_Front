import { connect } from "react-redux";
import { signInUser } from "./SignIn.Action";
import SignIn from "./SignIn";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { signInUser }
)(SignIn);
