const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add home to Airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("addedHome", {
    pageTitle: "Home Added Successfully!",
    currentPage: "addedHome",
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((homesRegistered) => {
    res.render("home", {
      homesRegistered: homesRegistered,
      pageTitle: "Airbnb Home",
      currentPage: "home",
    });
  });
};
