import { connect } from "react-redux";
import signOut from "./App.Action";
import App from "./App";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  { signOut }
)(App);
