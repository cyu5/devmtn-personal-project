import React from "react";
import { connect } from "react-redux";

function Menu(props) {
  const foodList = props.menu.map(item => {
    return (
      <li className="item">
        <span>{item.name}</span>
        <span>{item.category}</span>
        <span>{item.price}</span>
      </li>
    );
  });

  return (
    <section className="Menu">
      <div className="container">
        <h1>Menu</h1>
        <section>
          <ul>
            <li className="title">
              <span>Name</span>
              <span>Cat</span>
              <span>Price</span>
            </li>
            {foodList}
          </ul>
        </section>
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(mapStateToProps)(Menu);
