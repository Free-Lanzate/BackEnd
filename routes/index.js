var router = require("express").Router();
const controller = require('../controllers/userController');

module.exports = (app) => {
    router.get("/list", controller.findAll);
    router.post("/create", controller.create)
    app.use("/", router);
};