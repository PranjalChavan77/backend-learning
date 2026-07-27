const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((homesRegistered) => {
    res.render("store/home", {
      homesRegistered: homesRegistered,
      pageTitle: "Airbnb Home",
      currentPage: "home",
    });
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll((homesRegistered) => {
    res.render("store/homeList", {
      homesRegistered: homesRegistered,
      pageTitle: "Airbnb Home",
      currentPage: "homeList",
    });
  });
};

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", { 
      pageTitle: "My Bookings",
      currentPage: "bookings",
    });
  };

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((homesRegistered) => {
    res.render("store/favouriteList", { 
      homesRegistered: homesRegistered,
      pageTitle: "My Favourite Homes",
      currentPage: "favouriteList",
    });
  })  
};