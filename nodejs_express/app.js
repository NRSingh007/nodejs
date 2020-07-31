const express = require("express");

// accessing the express in app
const app = express();

// using ejs as view engine
app.set("view engine", "ejs");

/*
app.get("/", function (req, res) {
  res.send("This is the homepage");
});

// accssing route parameter
app.get("/profile/:id", function (req, res) {
  res.send("You requested to see a profile with the id of " + req.params.id);
});
*/

// Templating engine, embed data of js code into html files, so we can then inject dynamic content into the file which we return to the client
/*
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
*/

app.get("/" || "index", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

// instead of "sendFile", we will use "render" for ejs
app.get("/profile/:id", function (req, res) {
  var data = { age: 25, job: "dev", Songs: ['Tapta', 'Uttam', 'Ranbir'] };
  res.render("profile", { person: req.params.id, data: data }); // second parameter passing in veiw is by passing object, where properties will contain data
});

// const PORT = process.env.PORT;
// app.listen(PORT);
// console.log(`The app is listening in port ${PORT}`);

const PORT = 3000;
app.listen(PORT);
console.log(`The app is listening in port ${PORT}`);
