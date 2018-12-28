const axios = require("axios");

module.exports = {
  getMenu(req, res, next) {
    const db = req.app.get("db");

    db.get_menu()
      .then(menu => {
        res.send(menu);
      })
      .catch(error => {
        console.log(`get menu db query error`, error);
        res.status(500).send(`Server Error in getting menu info`);
      });
  }
};
