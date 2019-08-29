import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class AddTopic extends Component {
  state = {
    categoryId: this.props.match.params.categoryId,
    title: '',
    message: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTopic(this.props.user, this.state);
  };

  render() {
    if (this.props.topic) {
      const topicId = this.props.topic;
      this.props.resetTopic();
      return <Redirect to={`/topic/${topicId}/page_1`} />;
    }

    return (
      <div className="card">
        <h2 className="card-header">Create New Topic</h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-group m-2">
            <label htmlFor="title" className="input-group-text">
              Title:
            </label>
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="m-2">
            <textarea
              name="message"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark mr-auto ml-2 mb-2">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default AddTopic;
