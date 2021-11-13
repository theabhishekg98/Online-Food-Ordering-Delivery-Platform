const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const login = require("./routes/Login");
const register = require("./routes/Register");
const dishes = require("./routes/Dishes");
const imageUpload = require("./routes/ImageUpload");
const profile = require("./routes/Profile");
const restaurant = require("./routes/Restaurant");
const personalization = require("./routes/Personlization");
const deliveryaddress = require("./routes/DeliveryAddress");
const cors = require("cors");
const orders = require("./routes/Orders");
const passport = require("passport");
app.use(cors({ exposedHeaders: "token" }));

const { auth } = require("./utils/passport");
auth();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/uber-eats/api", login);
app.use("/uber-eats/api", register);
app.use("/uber-eats/api", dishes);
app.use("/uber-eats/api", imageUpload);
app.use("/uber-eats/api", profile);
app.use("/uber-eats/api", restaurant);
app.use("/uber-eats/api", personalization);
app.use("/uber-eats/api", deliveryaddress);
app.use("/uber-eats/api", orders);

app.use(
  session({
    secret: "uber_eats",
    resave: false, 
    saveUninitialized: false,
    duration: 60 * 60 * 1000, 
    activeDuration: 5 * 60 * 1000,
  })
);

app.get("/", function (req, resp) {
  resp.send("Hitting UberEats server endpoints");
});

const mongoose = require("mongoose");
const { mongoDB } = require("./config");

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 100,
};

mongoose.connect(mongoDB, options, (err, res) => {
  if (err) {
    console.log(err);
    console.log(`MongoDB Connection Failed!`);
  } else {
    console.log(`MongoDB Connected Successfully!`);
  }
});

app.listen(3001, function () {
  console.log("Server is listening on port 3001");
});

module.exports = app;
