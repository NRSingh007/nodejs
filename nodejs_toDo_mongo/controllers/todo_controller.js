var bodyParser = require("body-parser");

var mongoose = require("mongoose");

// connect database
// mongoose = process.env.MONGO;

mongoose
  .connect(
    "mongodb+srv://user:<password>@passportlogin.kcrmy.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log(`Mongo Db is connected`))
  .catch((err) => console.log(err));

// Create a schema, like blueprint
var todoSchema = new mongoose.Schema({
  item: String,
});

var Todo = mongoose.model("Todo", todoSchema);

// var data = [{ item: "code" }, { item: "eat" }, { item: "sleep" }];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    // get data from mongoDb and pass it to view
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render("todo", { todo_things: data });
    });
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    // get data from the view and add it to mongoDb
    var newTodo = Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete("/todo/:item", function (req, res) {
    // delete the requested item from mongoDb
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (
      err,
      data
    ) {
      if (err) throw err;
      res.json(data);
    });
  });
};

/*
for todo.ejs
loop
<% todos.forEach(function(data) { %>
    <li><%= data.item %></li>
    <% }); %>
*/
