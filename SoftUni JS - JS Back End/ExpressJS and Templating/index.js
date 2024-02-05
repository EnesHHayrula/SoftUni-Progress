const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const PORT = 6066;
const app = express();

const { getUsers, addUser } = require("./users");

/*View Engine */
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

/* MIDDLEWARE START */

// Third-party middleware
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
const staticFile = express.static("public");
app.use(staticFile);

//Global middleware
app.use((req, res, next) => {
  console.log(`HTTP Request: ${req.method}, Request Path: ${req.path}`);
  next();
});

// Partial routing middleware
app.use("/user", (req, res, next) => {
  console.log("USER MIDDLEWARE HAS BEEN INVOKED!");
  next();
});
// Concrete routing middleware
const specificMiddleware = (req, res, next) => {
  console.log("Specific route MIDDLEWARE!");
  next(); //next is important for the stream
};

/* MIDDLEWARE END */

/* ROUTING START */

// аpp HTTP methods - get,post,put,patch,delete(the most used)
app.get("/", (req, res) => {
  //   res.send("Hello, user!");
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/specific", (req, res) => {
  res.send("You have reached the specific route ;)");
});

// Endpoint -> method,path, action
// get-> method
// action -> req, res
app.get("/user", (req, res) => {
  const users = getUsers();
  res.render("users", { users });
});

app.get("/user/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  if (!userId) {
    res.status(404).send(`User ID: ${req.params.userId}  not existing`);
    return;
  }

  res.send({ id: userId, name: "Gosho" + userId });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const name = req.body.name; // -> req.body.name;
  const age = Number(req.body.age); // -> req.body.age;
  addUser(name, age);
  res.send("User created!");
});

app.get("/download-png", (req, res) => {
  //  .download -> ends the stream
  // res.download("./123.png");
  //   ---------------------------------------------
  //   res.attachment("./123.png");
  //   .attachment -> stream need to be ended manually, because multiple files can be attached
  //   res.end();
  // -----------------------------------------------
  //   res.sendFile(path.resolve(__dirname, "./123.png"));
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});
// Non existing page results / WILDCARD *
app.get("*", (req, res) => {
  res.status(404).send("Page not found! >:/");
});
/* ROUTING END */

// Listening on port
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
