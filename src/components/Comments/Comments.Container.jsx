import { connect } from 'react-redux';
import {
  addComment,
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
  { addComment, getCommentsByTopicId, resetComments }
)(Comments);
