const axios = require("axios");

module.exports = {
  getUser(req, res, next) {
    const db = req.app.get("db");
    const { user_id } = req.params;

    db.get_user({ user_id })
      .then(users => {
        console.log(`getting users `, users);
        res.send(users[0]);
      })
      .catch(error => {
        console.log(`get user db query error`, error);
        res.status(500).send(`Server Error in getting user info`);
      });
  },

  createUser(req, res, next) {
    const db = req.app.get("db");
    const { name, email, picture, auth0_id, address, phone } = req.body;

    db.create_user({ name, email, picture, auth0_id, address, phone })
      .then(users => {
        res.send(users[0]);
      })
      .catch(error => {
        console.log(`create user db query error`, error);
        res.status(500).send(`Server Error in createting user info`);
      });
  },

  changeAddress(req, res, next) {
    const db = req.app.get("db");
    const { address } = req.body;
    const { user_id } = req.params;

    db.change_address({ address, user_id })
      .then(users => {
        res.send(users[0]);
      })
      .catch(error => {
        console.log(`change address db query error`, error);
        res.status(500).send(`Server Error in changinge user address`);
      });
  }
};
