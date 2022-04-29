const RegisterController = require('../controllers/registerController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');

module.exports = (app) => {
    var router = require("express").Router();

    // User routes
    router.get("/users", UserController.findAll);
    router.get("/user/:id", UserController.findUserById)
    router.post("/users/create", UserController.create)
    router.get("/profile/:id", UserController.profileInfoById)

    // Post routes
    router.post('/post/create', PostController.create)
    router.post('/post/:id/update', PostController.update)
    router.post('/post/:id/delete', PostController.delete)

    //Register routes
    router.post("/register", RegisterController.register)
    app.use("/", router);
};