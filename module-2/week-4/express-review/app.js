/**
 * Connect to MongoDB
 */
require('./db'); // Busca db.js en la carpeta existente

// ℹ️ MongoStore in order to save the user session in the database
// https://www.npmjs.com/package/connect-mongo
const MongoStore = require("connect-mongo");
const session = require("express-session");
const express = require('express'); // Busca express dentro de node_modules
const app = express();

/**
 * Body parser makes body content available on a POST request
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Session
 */
// ℹ️ Middleware that adds a "req.session" information and later to check that you are who you say you are 😅
app.use(
  session({
    secret: process.env.SESSION_SECRET || "super hyper secret key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/express-review',
    }),
  })
);

/**
 * Handlebar configuration
 *
 * 1. Definir engine y llamar a handlebars
 * 2. Definir la carpeta publica (archivos estaticos)
**/
// Normalizes the path to the views folder
app.set("views", './views');
// Sets the view engine to handlebars
app.set("view engine", "hbs");
// AHandles access to the public folder
app.use(express.static('./public'));

/**
 * Llamando rutas externas
 **/
const indexRoutes = require("./routes.index");
const userRoutes = require("./routes.user");
app.use("/", indexRoutes);
app.use("/", userRoutes);

app.listen(3000, () => {
  console.log('My first app listening on port 3000! ')
});
