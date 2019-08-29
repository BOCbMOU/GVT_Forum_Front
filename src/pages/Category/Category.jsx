import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

class Category extends Component {
  state = {
    categoryId: this.props.match.params.categoryId,
    page: this.props.match.params.page,
  };

  componentDidMount() {
    const { categoryId, page } = this.state;
    this.props.getCategoryById(this.props.user, categoryId);
    this.props.getCategoryChildren(this.props.user, categoryId);
    this.props.getCategoryTopics(this.props.user, categoryId, page);
  }

  static getDerivedStateFromProps(newProps, state) {
    const { categoryId, page } = newProps.match.params;
    if (categoryId !== state.categoryId) {
      newProps.resetCategory();
      newProps.getCategoryById(newProps.user, categoryId);
      newProps.getCategoryChildren(newProps.user, categoryId);
      newProps.getCategoryTopics(newProps.user, categoryId, page);
      return {
        categoryId,
        page,
      };
    }
    if (page !== state.page) {
      newProps.resetTopics();
      newProps.getCategoryTopics(newProps.user, categoryId, page);
      return {
        page,
      };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.resetCategory();
  }

  render() {
    const { value: category, children, topics, numberOf } = this.props.category;
    if (!(category && children && topics)) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="card">
        <h2 className="card-header">{category.name}</h2>
        <span className="card-text ml-2">{category.description}</span>
        <Link
          to={`/category/${category._id}/add_topic`}
          className="btn btn-dark ml-auto mr-2"
        >
          New Topic
        </Link>
        <ul className="card-body pt-0 pb-0">
          <h5 className="card-header">Categories</h5>
          {children.map(category => (
            <li key={category._id} className="btn border p-0 m-1">
              <Link to={`/category/${category._id}/page_1`}>
                <h3 className="btn m-0">{category.name}</h3>
              </Link>
              <p className="card-text">{category.description}</p>
            </li>
          ))}
        </ul>
        <ul className="card-body pt-0 pb-0">
          <h5 className="card-header">Topics</h5>
          {/* TODO: create separate topics component */}
          {topics.map(topic => (
            <li key={topic._id} className="btn border p-1 pb-0 m-1">
              <Link to={`/topic/${topic._id}/page_1`}>
                <h4 className="btn m-0 p-0 mb-2 mr-5">{topic.title}</h4>
              </Link>
              <Link to={`/user/${topic.username}`} className="font-italic">
                By: {topic.username}
              </Link>
            </li>
          ))}
        </ul>
        <Pagination
          link={`/category/${category._id}`}
          page={this.state.page}
          numberOf={numberOf}
          pageSize={this.props.user.settings.pageSize}
        />
      </div>
    );
  }
}

export default Category;
