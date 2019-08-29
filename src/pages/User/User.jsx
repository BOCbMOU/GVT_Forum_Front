import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

class User extends Component {
  state = {
    username: this.props.match.params.username,
  };

  componentDidMount() {
    const { username } = this.state;
    this.props.getUserByName(this.props.user, username);
  }

  static getDerivedStateFromProps(newProps, state) {
    const { username } = newProps.match.params;
    if (username !== state.username) {
      newProps.resetUser();
      newProps.getUserByName(newProps.user, username);
      return { username };
    }
    return null;
  }

  componentWillUnmount() {
    this.props.resetUser();
  }

  render() {
    if (!this.props.userInfo) {
      return <Spinner color="#00BFFF" />;
    }
    const { username, avatar, accessLevel, createdAt } = this.props.userInfo;

    return (
      <div className="">
        <h2 className="card-header">{username}</h2>
        <img src={avatar} alt="avatar" className="rounded m-3" />
        <p className="card-text">{`Access Level: ${accessLevel}`}</p>
        <p className="card-text">{`Created at: ${createdAt}`}</p>
      </div>
    );
  }
}

export default User;
