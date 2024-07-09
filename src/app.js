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

let User = mongoose.model("User", user);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/user", async (req, res) => {
  try {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // Se o email que o usuario digitar for esse: res.json({email: "testeErrado@email.com"}); Irá gerar um erro!
    await newUser.save();
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = app;
