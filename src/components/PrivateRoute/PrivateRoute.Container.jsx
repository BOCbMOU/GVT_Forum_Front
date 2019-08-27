import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  stateToProps,
  {}
)(PrivateRoute);
