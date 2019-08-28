import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

class Category extends Component {
  componentDidMount() {
    const { categoryId, page } = this.props.match.params;
    this.props.getCategoryById(this.props.user, categoryId);
    this.props.getCategoryChildren(this.props.user, categoryId);
    this.props.getCategoryTopics(this.props.user, categoryId, page);
  }

  render() {
    const { value: category, children, topics } = this.props.category;
    if (!(category && children && topics)) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="category">
        <h2>{category.name}</h2>
        <span>{category.description}</span>
        <ul className="category-children">
          {children.map(category => (
            <li key={category._id}>
              <Link to={`/category/${category._id}/page_1`}>
                <h3>{category.name}</h3>
              </Link>
              <span>{category.description}</span>
            </li>
          ))}
        </ul>
        <ul className="category-topics">
          {topics.map(topic => (
            <li key={topic._id}>
              <Link to={`/topic/${topic._id}`}>
                <h4>{topic.title}</h4>
              </Link>
              <span>{topic.username}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
