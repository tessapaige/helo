require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const session = require("express-session");
const ctrl = require("./controller");

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connection established");
  })
  .catch(err => console.log(err));

app.get("/api/posts", ctrl.getAllPosts);
app.post("/api/register", ctrl.register);
app.post("/api/login", ctrl.login);
// app.delete("/api/products/:id", ctrl.deleteProduct);
// app.put("/api/products/:id", ctrl.updateProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
