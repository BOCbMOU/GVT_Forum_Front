import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, signOut }) => {
  const isToken = Boolean(user.token);
  return (
    <nav className="">
      <ul className="">
        <li className="">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        {!isToken ? (
          <Fragment>
            <li className="">
              <Link to="/sign-up" className="">
                Sign Up
              </Link>
            </li>
            <li className="">
              <Link to="/sign-in" className="">
                Sign In
              </Link>
            </li>
          </Fragment>
        ) : (
          <li>
            <Link to="/" className="" onClick={signOut}>
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
