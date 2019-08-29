import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Comments from '../../components/Comments';
import Spinner from '../../components/Spinner';

class Topic extends Component {
  state = {
    topicId: this.props.match.params.topicId,
    page: this.props.match.params.page,
  };

  componentDidMount() {
    this.props.getTopicById(this.props.user, this.state.topicId);
  }

  static getDerivedStateFromProps(newProps, state) {
    const { topicId, page } = newProps.match.params;
    if (topicId !== state.topicId) {
      newProps.resetTopic();
      newProps.getTopicById(newProps.user, topicId);
      return { topicId, page };
    }
    if (page !== state.page) {
      return { page };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.resetTopic();
  }

  render() {
    const { topic } = this.props;
    if (!topic) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="topic">
        <h2>{topic.title}</h2>
        <Comments topicId={topic._id} page={this.state.page} />
      </div>
    );
  }
}

export default Topic;
