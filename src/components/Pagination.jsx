import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ link, page = 0, numberOfPages }) => {
  console.log('TCL: Pagination -> page', page);
  const pagination = [];
  for (let i = 0; i < numberOfPages; i++) {
    const number = i + 1;
    pagination[i] =
      +page === number ? (
        <Link key={i} className="disabled-link" to={`${link}/page_${number}`}>
          {number}
        </Link>
      ) : (
        <Link key={i} to={`${link}/page_${number}`}>
          {number}
        </Link>
      );
  }

  return <div className="pagination">{pagination}</div>;
};

export default Pagination;
