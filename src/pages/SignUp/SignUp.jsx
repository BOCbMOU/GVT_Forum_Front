import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    // eslint-disable-next-line
    for (const key in this.state) {
      if (this.state[key].length < 1) {
        console.log('All fields required');
        return false;
      }
    }

    this.props.signUpUser(this.state);
  };

  render() {
    const { isSignedUp } = this.props.user;
    if (isSignedUp) {
      return <Redirect to="/sign-in" />;
    }

    return (
      <form onSubmit={this.onSubmit} className="card">
        <div>
          <label htmlFor="" className="input-group-text m-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control m-2"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="" className="input-group-text m-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control m-2"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="" className="input-group-text m-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control m-2"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="" className="input-group-text m-2">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control m-2"
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-dark mr-auto ml-2 mb-2">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
