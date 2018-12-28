const axios = require("axios");

module.exports = {
  // get line items
  getLineItems(req, res, next) {
    const db = req.app.get("db");
    const { order_id } = req.params;

    db.get_order_lines({ order_id })
      .then(LineItems => {
        res.send(LineItems);
      })
      .catch(error => {
        console.log(`get LineItems db query error`, error);
        res.status(500).send(`Server Error in LineItems`);
      });
  },

  createLineItem(req, res, next) {
    const db = req.app.get("db");
    const { order_id, name, quantity, price } = req.body;

    db.add_new_line({ order_id, name, quantity, price })
      .then(lineItems => {
        res.send(lineItems[0]);
      })
      .catch(error => {
        console.log(`add line item db query error`, error);
        res.status(500).send(`Server Error in add line item`);
      });
  }
};
