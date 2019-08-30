import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './AddComment';
import UpdateComment from './UpdateComment';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

class Comments extends Component {
  state = {
    topicId: this.props.topicId,
    page: this.props.page,
    updateCommentId: null,
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

  onEditClick = event => {
    event.preventDefault();
    this.setState({ updateCommentId: event.target.name });
  };

  resetUpdateComment = () => {
    this.setState({ updateCommentId: null });
  };

  render() {
    const { value: comments, numberOfPages } = this.props.comments;
    if (!comments) {
      return <Spinner color="#00BFFF" />;
    }

    // TODO: show edit link only for self comments
    return (
      <Fragment>
        <ul className="topic-comments">
          {comments.map(comment =>
            this.state.updateCommentId &&
            this.state.updateCommentId === comment._id ? (
              <li key={comment._id} className="card p-2">
                <UpdateComment
                  user={this.props.user}
                  oldMessage={comment.message}
                  commentId={comment._id}
                  updateComment={this.props.updateComment}
                  resetUpdateComment={this.resetUpdateComment}
                />
              </li>
            ) : (
              <li key={comment._id} className="card p-2">
                <h4 className="card-header">
                  <Link to={`/user/${comment.username}`} className="mr-5">
                    {comment.username}
                  </Link>
                  <button
                    name={comment._id}
                    onClick={this.onEditClick}
                    className="badge badge-primary text-nowrap font-italic"
                  >
                    edit
                  </button>
                </h4>
                <span className="card-title">{comment.createdAt}</span>
                <div className="card-text">{comment.message}</div>
              </li>
            )
          )}
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
