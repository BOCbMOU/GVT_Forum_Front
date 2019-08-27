import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import NotificationSystem from "../NotificationComponent";
// import PrivateRoute from "../PrivateRoute";

const App = ({ user, signOut }) => {
  return (
    <Fragment>
      <Router>
        <Navigation user={user} signOut={signOut} />
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
