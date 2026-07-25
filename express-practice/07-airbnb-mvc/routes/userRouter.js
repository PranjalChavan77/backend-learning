//External Module
const express = require('express');
const userRouter = express.Router();

//Local module
const homesController = require('../controllers/home');

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
