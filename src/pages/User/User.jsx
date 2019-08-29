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
    const { username, avatar, accessLevel, createdAt } = this.props.userInfo;
    if (!username) {
      return <Spinner color="#00BFFF" />;
    }

    return (
      <div className="user-info">
        <h2>{username}</h2>
        <p>{avatar}</p>
        <img src={avatar} alt="avatar" />
        <p>{accessLevel}</p>
        <p>{createdAt}</p>
      </div>
    );
  }
}

export default User;
