const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const { PORT } = require("./constants");
const routes = require("./router");

// Local variables
const app = express();

// express Config
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

// handlebars config
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// Routing
app.use(routes);

// Listener
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`));
