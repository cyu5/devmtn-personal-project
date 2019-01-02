import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMenu } from "./ducks/reducer";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getMenu();
  };

  getMenu = () => {
    axios.get(`/api/menu`).then(res => {
      const menu = res.data;
      this.props.getMenu(menu);
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = { getMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
