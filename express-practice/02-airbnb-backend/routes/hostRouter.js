//Core Module 
const path = require('path');

//External Module
const express = require('express');

const hostRouter = express.Router();

//Local module
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addedHome.html'));
});

module.exports = hostRouter;