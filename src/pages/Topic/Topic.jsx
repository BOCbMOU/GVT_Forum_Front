import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

class Topic extends Component {
  topicDiv = React.createRef();
  state = {
    topicId: this.props.match.params.topicId,
    page: this.props.match.params.page,
  };

  componentDidMount() {
    const { topicId, page } = this.state;
    this.props.getTopicById(this.props.user, topicId);
    this.props.getTopicComments(this.props.user, topicId, page);
  }

  static getDerivedStateFromProps(newProps, state) {
    const { topicId, page } = newProps.match.params;
    if (topicId !== state.topicId) {
      newProps.resetTopic();
      newProps.getTopicById(newProps.user, topicId);
      newProps.getTopicComments(newProps.user, topicId, page);
      return {
        topicId,
        page,
      };
    }
    if (page !== state.page) {
      newProps.getTopicComments(newProps.user, topicId, page);
      return {
        page,
      };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.resetTopic();
  }

  // handleScroll = () => {
  //   const { index, selected } = this.props;
  //   if (index === selected) {
  //     this.topicDiv.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  render() {
    const { value: topic, comments, numberOf } = this.props.topic;
    if (!(topic && comments)) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="topic" ref={this.topicDiv}>
        <h2>{topic.title}</h2>
        <ul className="topic-comments">
          {comments.map(comment => (
            <li key={comment._id}>
              <h4>{comment.username}</h4>
              <span>{comment.createdAt}</span>
              <div>{comment.message}</div>
            </li>
          ))}
        </ul>
        <Pagination
          link={`/topic/${topic._id}`}
          page={this.state.page}
          numberOfPages={Math.ceil(
            numberOf / this.props.user.settings.pageSize
          )}
        />
      </div>
    );
  }
}

export default Topic;
