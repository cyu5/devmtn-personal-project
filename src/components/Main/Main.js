import React from "react";
import "./Main.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import Register from "./Register/Register";
import links from "../../links";

function Main(props) {
  return (
    <main className="Main">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path={links.register} component={Register} />
        <Route exact path="/" component={Menu} />
      </Switch>
    </main>
  );
}

const mapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(mapStateToProps)(Main);
