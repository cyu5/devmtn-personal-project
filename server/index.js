const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();
const authController = require("./controllers/auth_controller");
// const quotesController = require("./controllers/quotes_controller");
const userController = require("./controllers/user_controller");
const menuController = require("./controllers/menu_controller");
const orderController = require("./controllers/order_controller");
const lineItemController = require("./controllers/line_items_controller");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log(`connected to massive`);
  })
  .catch(error => {
    console.log("error connecting to db", error);
  });

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

app.post(`/api/take_order`, orderController.takeOrder);


app.get(`/api/line_item/:order_id`, lineItemController.getLineItems);
app.post(`/api/line_item/`, lineItemController.createLineItem);

app.get(`/api/order/:user_id`, orderController.getOrders);
app.post(`/api/order/`, orderController.placeOrder);
app.delete(`/api/order/:order_id`, orderController.deleteOrder);

app.get(`/api/user/:user_id`, userController.getUser);
app.post(`/api/user/`, userController.createUser);
app.put(`/api/user/:user_id`, userController.changeAddress);

app.get(`/api/menu`, menuController.getMenu);

app.get("/auth/callback", authController.login);
app.get("/auth/user-data", authController.getUser);
app.post(`/auth/logout`, authController.logout);
// app.get(`/api/quotes`, quotesController.getQuotes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
