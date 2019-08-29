import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

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
            <li key={category._id} className="card">
              <Link to={`/category/${category._id}/page_1`}>
                <div className="card-header">{category.name}</div>
              </Link>
              <div className="card-body">
                <span>{category.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
