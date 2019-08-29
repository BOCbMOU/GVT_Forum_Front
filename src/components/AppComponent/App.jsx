import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Topic from '../../pages/Topic';
import User from '../../pages/User';
import NotificationSystem from '../NotificationComponent';
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
          <Route path="/categories" exact component={Home} />
          <Route path="/category/:categoryId/page_:page" component={Category} />
          <Route path="/topic/:topicId/page_:page" component={Topic} />
          <Route path="/user/:username" component={User} />
        </Switch>
      </Router>
      <NotificationSystem />
    </Fragment>
  );
};

export default App;
