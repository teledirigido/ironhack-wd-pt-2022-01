/**
 * Connect to MongoDB
 */
require('./db'); // Busca db.js en la carpeta existente

const express = require('express'); // Busca express dentro de node_modules
const app = express();


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
app.use("/", indexRoutes);

app.listen(3000, () => {
  console.log('My first app listening on port 3000! ')
});
