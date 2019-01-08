import React, { Component } from "react";
import "./Login.css";

import { connect } from "react-redux";
import { login, register } from "../../../ducks/reducer";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.proceedAsGuest = this.proceedAsGuest.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  login() {
    const { login, history } = this.props;
    const { username, password } = this.state;
    login({ username, password }, history);
  }

  register() {
    const { register, history } = this.props;
    const { username, password } = this.state;
    register({ username, password }, history);
  }

  proceedAsGuest() {
    const { history } = this.props;
    history.push("/menu");
  }

  useSocialLogin = () => {
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );

    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  };

  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }

  render() {
    return (
      <div id="Login__parent">
        <div id="Login__child">
          <input
            className="Login__input"
            type="text"
            placeholder="Username"
            onChange={e => this.handleChange("username", e.target.value)}
          />
          <input
            className="Login__input"
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange("password", e.target.value)}
          />
          <div>
            <button
              className="Login__btn"
              id="Login__loginBtn"
              onClick={this.login}
            >
              Login
            </button>
            <button
              className="Login__btn"
              id="Login__registerBtn"
              onClick={this.register}
            >
              Register
            </button>
          </div>
          <span id="Login__GuestLink" onClick={this.useSocialLogin}>
            Login with Google or Github
          </span>
          <span id="Login__GuestLink" onClick={this.proceedAsGuest}>
            Continue as a Guest
          </span>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  { login, register }
)(Login);
