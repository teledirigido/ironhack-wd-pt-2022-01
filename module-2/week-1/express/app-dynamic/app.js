const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

/**
 * Routes
 */
app.get("/", (req, res, next) => {
  let data = {
    name: "Miguel",
    bootcamp: "Ironhack",
    cities: ["Chile", "New Zealand", "France", "UK", "Spain"]
  };
  res.render("index", data);
});
app.get("/about", (req, res, next) => res.render("about"));

/**
 * Listen localhost on port 3000
 **/
app.listen(3000);
