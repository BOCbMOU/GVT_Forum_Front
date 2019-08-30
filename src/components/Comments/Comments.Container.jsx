import { connect } from 'react-redux';
import {
  addComment,
  updateComment,
  getCommentsByTopicId,
  resetComments,
} from './Comments.Action';
import Comments from './Comments';

const stateToProps = state => ({
  user: state.user,
  comments: state.comments,
});

export default connect(
  stateToProps,
  { addComment, updateComment, getCommentsByTopicId, resetComments }
)(Comments);
