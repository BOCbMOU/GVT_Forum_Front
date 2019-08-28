import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

class Home extends Component {
  componentDidMount() {
    this.props.getTopCategories(this.props.user);
  }

  render() {
    const { value: categories } = this.props.categories;
    if (!categories) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="top-categories-div">
        <ul className="top-categories-ul">
          {categories.map(category => (
            <li key={category._id}>
              <Link to={`/category/${category._id}/page_1`}>
                <h2>{category.name}</h2>
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
