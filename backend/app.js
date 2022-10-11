const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
//const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
//app.use(shopRoutes);

app.use((req, res, next) => {
  User.findById("63445fb6aca833c84b771165")
    .then((user) => {
      console.log(user);

      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

mongoose
  .connect(
    "mongodb+srv://hyunsuKim:kim12345@cluster0.iixmbo0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Hyunsu Kim",
          email: "kimhyu4@isu.edu",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
