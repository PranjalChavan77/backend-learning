const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("admin/addHome", {
    pageTitle: "Add home to Airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("admin/addedHome", {
    pageTitle: "Home Added Successfully!",
    currentPage: "addedHome",
  });
};

exports.getAdminHomes = (req, res, next) => {
  Home.fetchAll((homesRegistered) => {
    res.render("admin/adminHomeList", {
      homesRegistered: homesRegistered,
      pageTitle: "Admin Homes List",
      currentPage: "adminHomeList",
    });
  });
};