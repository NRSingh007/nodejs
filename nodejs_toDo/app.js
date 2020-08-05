// MVC(Model, View,  Controller) is used
// Model: Data
// Views: Template Files(ejs)
// Controller: Bridge between Model and Controller, manipulate data, handle routes, etc.

const express = require("express");
const app = express();

var todo_controller = require("./controllers/todo_controller");

// set template engine (ejs)
app.set("view engine", "ejs");

// static files
// "/assets" routes is not use in order to access the static file in every routes
app.use(express.static("./public"));

// fire controllers
todo_controller(app);

app.listen(3000);
console.log("Listening in port 3000.....");
