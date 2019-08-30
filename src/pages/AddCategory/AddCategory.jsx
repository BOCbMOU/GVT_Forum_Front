import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class AddCategory extends Component {
  state = {
    name: '',
    description: '',
    parentCategoryId: this.props.match.params.parentCategoryId,
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addCategory(this.props.user, this.state);
  };

  render() {
    const { value: category } = this.props.category;
    if (category && category.isAdded) {
      const { _id: categoryId } = category;
      this.props.resetCategory();
      return <Redirect to={`/category/${categoryId}/page_1`} />;
    }

    return (
      <div className="card">
        <h2 className="card-header">Create New Category</h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-group m-2">
            <label htmlFor="name" className="input-group-text">
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="m-2">
            <label htmlFor="description" className="input-group-text">
              Description:
            </label>
            <textarea
              name="description"
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

export default AddCategory;
