import { connect } from 'react-redux';
import { addTopic } from './AddTopic.Action';
import { resetTopic } from '../Topic/Topic.Action';
import AddTopic from './AddTopic';

const stateToProps = state => ({
  user: state.user,
  topic: state.topic,
});

export default connect(
  stateToProps,
  { addTopic, resetTopic }
)(AddTopic);
