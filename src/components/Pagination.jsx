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
        <Link
          key={i}
          className="disabled-link"
          to={`${link}/page_${number}`}
          onClick={scrollOnClick}
        >
          {number}
        </Link>
      ) : (
        <Link key={i} to={`${link}/page_${number}`} onClick={scrollOnClick}>
          {number}
        </Link>
      );
  }

  return (
    <div className="pagination">
      <Link
        className={+page <= 1 ? 'disabled-link' : ''}
        to={`${link}/page_${page - 1}`}
        onClick={scrollOnClick}
      >
        Prev
      </Link>
      {pagination}
      <Link
        className={+page >= numberOfPages ? 'disabled-link' : ''}
        to={`${link}/page_${+page + 1}`}
        onClick={scrollOnClick}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
