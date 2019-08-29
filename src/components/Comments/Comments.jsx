import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import AddComment from './AddComment';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

class Comments extends Component {
  state = {
    topicId: this.props.topicId,
    page: this.props.page,
  };

  componentDidMount() {
    const { user, topicId, page } = this.props;
    this.props.getCommentsByTopicId(user, topicId, page);
  }

  static getDerivedStateFromProps(newProps, state) {
    const { topicId, page } = newProps;
    if (topicId !== state.topicId || page !== state.page) {
      newProps.resetComments();
      newProps.getCommentsByTopicId(newProps.user, topicId, page);
      return { topicId, page };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.resetComments();
  }

  render() {
    const { value: comments, numberOfPages } = this.props.comments;
    if (!comments) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <Fragment>
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
          link={`/topic/${this.props.topicId}`}
          page={this.props.page}
          numberOfPages={numberOfPages}
        />
        {this.props.user.token ? (
          <AddComment
            user={this.props.user}
            topicId={this.props.topicId}
            addComment={this.props.addComment}
          />
        ) : (
          <div>Sign In to leave comment</div>
        )}
      </Fragment>
    );
  }
}

export default Comments;
