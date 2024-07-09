let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("./models/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

let User = mongoose.Model("User", user);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

module.exports = app;
