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
        <h2 className="card-header">{username}</h2>
        <span className="card-text">{email}</span>
        <p className="card-text">{accessLevel}</p>
        {avatar ? (
          <img src={avatar} alt="avatar" className="rounded m-3" />
        ) : null}
        <form onSubmit={this.onSubmit} className="input-group m-2 border p-2">
          <div className="">
            <span htmlFor="" className="card-text">
              New avatar:
            </span>
            <input
              name="newAvatar"
              type="file"
              ref={this.fileInput}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark mr-auto ml-2 mb-2">
            Update avatar
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Settings;
