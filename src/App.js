import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import { connect } from "react-redux";
import { setUser } from "./ducks/reducer";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    axios.get(`/auth/user-data`).then(res => {
      this.setState({ user: res.data.user });
    });
  };

  login = () => {
    const redirectUri = encodeURIComponent(
      window.location.origin + "/auth/callback"
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  };

  render() {
    return (
      <div className="App">
        <div className="auth0-button">
          {/* <Header /> */}
          {this.props.user}
          <header className="Header">
            <button onClick={this.login}>Log in</button>
          </header>
          <Switch>
            <Route path="/" component={List} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { setUser }
)(App);
