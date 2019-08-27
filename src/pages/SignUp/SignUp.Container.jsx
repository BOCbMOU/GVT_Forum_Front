import { connect } from "react-redux";
import { signUpUser } from "./SignUp.Action";
import SignUp from "./SignUp";

const stateToProps = state => ({
  user: state.user
});

export default connect(
  stateToProps,
  { signUpUser }
)(SignUp);
