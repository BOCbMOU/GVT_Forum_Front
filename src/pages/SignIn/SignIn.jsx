import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
    this.props.signInUser(this.state);
  };

  render() {
    const { token } = this.props.user;
    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.onSubmit} className="">
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
        <button type="submit" className="">
          Sign In
        </button>
      </form>
    );
  }
}

export default SignIn;
