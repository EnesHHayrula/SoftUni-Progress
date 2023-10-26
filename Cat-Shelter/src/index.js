const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const { PORT } = require("./constants");
const routes = require("./router");

// Local variables
const app = express();

// Express Config
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
