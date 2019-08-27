import { connect } from "react-redux";
import { getTopCategories } from "./Home.Action";
import Home from "./Home";

const stateToProps = state => ({
  user: state.user,
  categories: state.categories
});

export default connect(
  stateToProps,
  { getTopCategories }
)(Home);
