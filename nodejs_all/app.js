// Middleware: code that runs between request and response

const express = require("express");
const bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// accessing the express in app
const app = express();

// using ejs as view engine
app.set("view engine", "ejs");

// Middleware, conventional
/*
app.use("/assets", function (req, res, next) {
  console.log(req.url);
  next();
});
*/
// Preset express Middleware
app.use("/assets", express.static("css"));

app.get("/" || "index", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
  // console.log(req.query);
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

// instead of "sendFile", we will use "render" for ejs
app.get("/profile/:id", function (req, res) {
  // http://localhost:3000/profile/:naorem
  var data = { age: 25, job: "dev", Songs: ["Tapta", "Uttam", "Ranbir"] };
  res.render("profile", { person: req.params.id, data: data });
  // second parameter passing in veiw is by passing object, where properties will contain data
});

const PORT = 3000;
app.listen(PORT);
console.log(`The app is listening in port ${PORT}`);
