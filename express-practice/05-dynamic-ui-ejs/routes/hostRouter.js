//Core Module 
const path = require('path');

//External Module
const express = require('express');

const hostRouter = express.Router();

//Local module
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', {pageTitle: 'Add home to Airbnb'});
});

const homesRegistered = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Registration Successful For:", req.body, req.body.houseName);
    homesRegistered.push({houseName: req.body.houseName});
    res.render('addedHome', {pageTitle: 'Home Added Successfully!'});
});

exports.hostRouter = hostRouter;
exports.homesRegistered = homesRegistered;