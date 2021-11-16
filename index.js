require('./conexion');
const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path');

//Settings
app.set("appName", "Proyect");
app.set("port", 3030);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
); 
app.set("view engine", ".hbs");

//Middlewares
app.use(express.json());

//Rutas
app.use(require("./SRC/routing"));

//Servidor
app.listen(app.get("port"), () => {
  console.log(`Server active on : ${app.get("port")}`);
});
