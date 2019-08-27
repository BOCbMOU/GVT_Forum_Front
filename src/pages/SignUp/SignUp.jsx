import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
        console.log("All fields required");
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
      <form onSubmit={this.onSubmit} className="">
        <div className="">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            className=""
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className=""
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className=""
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            className=""
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
