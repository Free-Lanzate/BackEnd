const controller = require('../controllers/userController');


module.exports = (app) => {
    var router = require("express").Router();
    router.get("/list", controller.findAll);
    router.get("/user/:id", controller.findUserById)
    router.post("/create", controller.create)
    app.use("/", router);
};