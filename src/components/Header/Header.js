import React from "react";
import { Link } from "react-router-dom";
import links from "../../links";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="container">
        Header
        <Link to={links.login}>Login</Link>
        <Link to={links.register}>Register</Link>
      </div>
    </header>
  );
}
