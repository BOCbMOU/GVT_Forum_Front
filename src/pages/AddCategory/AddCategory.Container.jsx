import { connect } from 'react-redux';
import { addCategory } from './AddCategory.Action';
import { resetCategory } from '../Category/Category.Action';
import AddCategory from './AddCategory';

const stateToProps = state => ({
  user: state.user,
  category: state.category,
});

export default connect(
  stateToProps,
  { addCategory, resetCategory }
)(AddCategory);
