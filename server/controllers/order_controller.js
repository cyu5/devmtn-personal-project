const axios = require("axios");

module.exports = {
  getOrders(req, res, next) {
    const db = req.app.get("db");
    const { user_id } = req.params;

    db.get_user_orders({ user_id })
      .then(orders => {
        res.send(orders);
      })
      .catch(error => {
        console.log(`get orders db query error`, error);
        res.status(500).send(`Server Error in orders`);
      });
  },

  placeOrder(req, res, next) {
    const db = req.app.get("db");
    const { user_id, date, type } = req.body;

    db.place_order({ user_id, date, type })
      .then(orders => {
        res.send(orders[0]);
      })
      .catch(error => {
        console.log(`place order db query error`, error);
        res.status(500).send(`Server Error in place order`);
      });
  },

  deleteOrder(req, res, next) {
    const db = req.app.get("db");
    const { order_id } = req.params;

    db.delete_order({ order_id })
      .then(orders => {
        res.send(orders[0]);
      })
      .catch(error => {
        console.log(`delete order db query error`, error);
        res.status(500).send(`Server Error in delete order`);
      });
  },

  takeOrder(req, res, next) {
    const db = req.app.get("db");
    const { user_id, date, type, line_items } = req.body;

    // receive user

    db.place_order({ user_id, date, type })
      .then(orders => {
        res.send(orders[0]);
      })
      .catch(error => {
        console.log(`place order db query error`, error);
        res.status(500).send(`Server Error in place order`);
      });
  }
};
