const axios = require("axios");

module.exports = {
  login(req, res, next) {
    const { code } = req.query;
    const payload = {
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };

    tradeCodeForAccessToken()
      .then(tradeAccessTokenForUserInfo)
      .then(storeUserInfoInDatabase)
      .catch(error => {
        console.log("error in login route", error);
        res.status(500).send(`something bad happened to our server`);
      });

    function tradeCodeForAccessToken() {
      console.log(`Auth0 sends back code: `, code);
      return axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
        payload
      );
    }

    function tradeAccessTokenForUserInfo(response) {
      const { access_token } = response.data;
      console.log(`Auth0 sends back access token`, access_token);
      return axios.get(
        `https://${
          process.env.REACT_APP_AUTH0_DOMAIN
        }/userinfo?access_token=${access_token}`
      );
    }

    function storeUserInfoInDatabase(response) {
      // and put user info on session

      console.log(`auth0 sends back user info:`, response.data);
      const db = req.app.get("db");
      const user = response.data;
      const { name, email, picture, auth0_id } = user;
      console.log(`auth0 sends back user info:`, user);

      return db.get_user([user.sub]).then(users => {
        if (user.length) {
          req.session.user = { name, email, picture, auth0_id };
          res.redirect("/");
        } else {
          return db
            .create_user({ name, email, picture, auth0_id })
            .then(newUsers => {
              req.session.user = newUsers[0];
              res.redirect("/");
            });
        }
      });
    }
  },

  getUser(req, res, next) {
    res.json({ user: req.session.user });
  },

  logout(req, res, next) {
    req.session.destroy();
    res.send();
  }
};
