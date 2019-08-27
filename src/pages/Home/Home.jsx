import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

class Home extends Component {
  componentDidMount() {
    this.props.getTopCategories(this.props.user);
  }

  render() {
    const { categories } = this.props;
    if (categories.length < 1) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="top-categories">
        <ul className="top-category">
          {categories.map(category => (
            <li key={category._id}>
              <Link to={`/categories/${category._id}`}>
                <h3>{category.name}</h3>
              </Link>
              <span>{category.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
