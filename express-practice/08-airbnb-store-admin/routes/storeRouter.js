//External Module
const express = require('express');
const storeRouter = express.Router();

//Local module
const homesController = require('../controllers/storeController');

storeRouter.get("/", homesController.getHomes);

storeRouter.get("/bookings", homesController.getBookings);

storeRouter.get("/favouriteList", homesController.getFavouriteList);

storeRouter.get("/homeList", homesController.getHomeList);

module.exports = storeRouter;
