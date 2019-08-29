import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ user, signOut }) => {
  const isToken = Boolean(user.token);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {!isToken ? (
          <Fragment>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={signOut}>
                Sign Out
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
