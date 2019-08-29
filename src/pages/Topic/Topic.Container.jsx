import { connect } from 'react-redux';
import { getTopicById, resetTopic } from './Topic.Action';
import Topic from './Topic';

const stateToProps = state => ({
  user: state.user,
  topic: state.topic,
});

export default connect(
  stateToProps,
  { getTopicById, resetTopic }
)(Topic);
