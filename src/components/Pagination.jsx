import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ link, page = 0, numberOfPages = 1 }) => {
  // TODO: do scroll with refs
  const scrollOnClick = () => {
    window.scrollTo(0, 0);
  };

  const pagination = [];
  for (let i = 0; i < numberOfPages; i++) {
    const number = i + 1;
    pagination[i] =
      +page === number ? (
        <li className="page-link">
          <Link
            key={i}
            className="disabled-link"
            to={`${link}/page_${number}`}
            onClick={scrollOnClick}
          >
            {number}
          </Link>
        </li>
      ) : (
        <li className="page-link">
          <Link key={i} to={`${link}/page_${number}`} onClick={scrollOnClick}>
            {number}
          </Link>
        </li>
      );
  }

  return (
    <nav className="ml-auto mr-2">
      <ul className="pagination">
        <li className={`page-item ${+page <= 1 ? 'disabled' : ''}`}>
          <Link
            className="page-link"
            to={`${link}/page_${page - 1}`}
            onClick={scrollOnClick}
          >
            Prev
          </Link>
        </li>
        {pagination}
        <li className={`page-item ${+page >= numberOfPages ? 'disabled' : ''}`}>
          <Link
            className="page-link"
            to={`${link}/page_${+page + 1}`}
            onClick={scrollOnClick}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
