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
      <div>
        <h2>Create New Topic</h2>
        <form onSubmit={this.onSubmit}>
          <div className="">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" onChange={this.onChange} />
            <textarea name="message" onChange={this.onChange} className="" />
          </div>
          <button type="submit" className="">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default AddTopic;
