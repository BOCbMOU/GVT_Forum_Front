import { connect } from "react-redux";
import {
  getCategoryById,
  getCategoryChildren,
  getCategoryTopics
} from "./Category.Action";
import Category from "./Category";

const stateToProps = state => ({
  user: state.user,
  category: state.category
});

export default connect(
  stateToProps,
  { getCategoryById, getCategoryChildren, getCategoryTopics }
)(Category);
