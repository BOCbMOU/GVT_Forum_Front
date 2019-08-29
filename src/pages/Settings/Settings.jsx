import React, { Component, Fragment } from 'react';
import { error } from 'react-notification-system-redux';
import Spinner from '../../components/Spinner';

// TODO:!!! update on add avatar
export class Settings extends Component {
  fileInput = React.createRef();

  componentDidMount() {
    this.props.getUserInfo(this.props.user);
  }

  componentWillUnmount() {
    this.props.resetUserInfo();
  }

  onSubmit = event => {
    event.preventDefault();

    const avatar = this.fileInput.current.files[0];
    if (!avatar) {
      error({
        title: 'Avatar is required!',
        position: 'tr',
      });
      return;
    }
    this.props.updateAvatar(this.props.user, avatar);
  };

  render() {
    if (!this.props.userInfo) {
      return <Spinner color="#00BFFF" />;
    }
    const { username, email, avatar, accessLevel } = this.props.userInfo;

    return (
      <Fragment>
        <h2>{username}</h2>
        <p>{email}</p>
        <p>{accessLevel}</p>
        {avatar ? <img src={avatar} alt="avatar" /> : null}
        <form onSubmit={this.onSubmit}>
          <div className="">
            <span htmlFor="">New avatar:</span>
            <input name="newAvatar" type="file" ref={this.fileInput} />
          </div>
          <button type="submit" className="">
            Update avatar
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Settings;
