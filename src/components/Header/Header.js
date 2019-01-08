import React from "react";
import { Link } from "react-router-dom";
import links from "../../links";

export default function Header(props) {
  return (
    <header className="Header">
      <div className="container">
        <h1>MAI TAI</h1>
        <p>Chinese Restaurant</p>
        <nav>
          <Link to="/auth/login">Login</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>

          {/* <figure class="logo">
            <img
              src="https://cdn0.iconfinder.com/data/icons/food-volume-1-4/48/53-256.png"
              alt="logo"
            />
            <figcaption>MAI TAI</figcaption>
          </figure> */}

          {/* <ul>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
