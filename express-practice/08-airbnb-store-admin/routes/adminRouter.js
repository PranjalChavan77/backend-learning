//External Module
const express = require('express');
const adminRouter = express.Router();

//Local module
const adminController = require('../controllers/adminController');

adminRouter.get("/add-home", adminController.getAddHome);

adminRouter.post("/add-home", adminController.postAddHome);

adminRouter.get("/adminHomeList", adminController.getAdminHomes);

module.exports = adminRouter;
