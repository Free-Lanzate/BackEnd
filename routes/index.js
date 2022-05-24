const RegisterController = require('../controllers/registerController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');
const LoginController = require('../controllers/loginController');
const orderDetailsController = require('../controllers/orderDetailsController')
const forgotPasswordController = require('../controllers/forgotPasswordController')
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
    router.post("/register/freelancer", RegisterController.registerFreelancer)

    //Login routes
    router.post("/login", LoginController.login)
    router.get("/login", LoginController.home)
    

    //Order routes

    router.get("/profile/:id/orders", orderDetailsController.findAllOrderedItemsByUser)
    
    //Search route
    //Funciona como /search?keyword=algo
    router.get("/search", PostController.searchPost)

    //RecoveryPassword routes
    router.post("/recoveryPassword", forgotPasswordController.sendEmail)
    router.post("/resetPassword/:id/:tokenResetPassword", forgotPasswordController.resetPassword)
    app.use("/", router);
};