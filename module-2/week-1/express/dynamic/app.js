// Asignacion de varialbes
const express = require("express");
const app = express();

// Configuracion de mi aplicacion
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Rutas
app.get("/", (req, res, next) => {
  let data = {
    name: "Miguel",
    bootcamp: false,
    cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"],
    addresses: [
      {
        street: "Your heart",
        number: false,
        color: 'red'
      },
      {
        street: "Hmm",
        number: 666,
        color: 'blue'
      }
    ]
  };
  res.render("index", data);
});

app.get("/about", (req, res, next) => res.render("about"));

// Ejecutar el servidor
app.listen(3000);
