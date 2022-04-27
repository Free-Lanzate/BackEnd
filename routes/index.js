const UserController = require('../controllers/userController');


module.exports = (app) => {
    var router = require("express").Router();
    router.get("/list", UserController.findAll);
    router.get("/user/:id", UserController.findUserById)
    router.post("/create", UserController.create)
    app.use("/", router);
};