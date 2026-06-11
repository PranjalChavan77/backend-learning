//Core Module 
const path = require('path');

//External Module
const express = require('express');

const userRouter = express.Router();

//Local module
const rootDir = require('../utils/pathUtils');
const { homesRegistered } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
    console.log(homesRegistered);
    res.render('home', {homesRegistered: homesRegistered, pageTitle: 'Airbnb Home'});
});

module.exports = userRouter;
