const RegisterController = require('../controllers/registerController');
const UserController = require('../controllers/userController');
const PostController = require('../controllers/postController');
const LoginController = require('../controllers/loginController');
const orderDetailsController = require('../controllers/orderDetailsController')
const forgotPasswordController = require('../controllers/forgotPasswordController')
const FreelancerController = require('../controllers/freelancerController');
const PostCategoryController = require('../controllers/postCategoryController');
const ShoppingController = require('../controllers/shoppingController')
module.exports = (app) => {
    var router = require("express").Router();

    // User routes
    router.get("/users", UserController.findAll);
    router.get("/user/:id", UserController.findUserById);
    router.post("/users/create", UserController.create);
    router.get("/profile/:id", UserController.profileInfoById);
    router.post("/user/:id/update", UserController.update);

    // PostCategory routes
    router.get("/categories", PostCategoryController.getCategories);
    router.get("/categories/:id", PostCategoryController.getPostsByCategory);

    // Post routes
    router.post('/post/create', PostController.create);
    router.post('/post/:id/update', PostController.update);
    router.post('/post/:id/delete', PostController.delete);
    router.post('/post/:id', PostController.getPostInfo);
    router.get("/post/:id/related", PostController.getRelatedPosts);
    // Get all users
    router.get('/post/getAll', PostController.findAll);

    //Register routes
    router.post("/register", RegisterController.register);
    router.post("/register/freelancer", RegisterController.registerFreelancer);

    //Login routes
    router.post("/login", LoginController.login);
    router.get("/login", LoginController.home);

    //Order routes
    router.get("/profile/:id/orders", orderDetailsController.findAllOrderedItemsByUser);
    
    //Search routes
    //Funcionan como /search?keyword=algo
    router.get("/search", PostController.searchPost);
    router.get("/searchFreelancer", FreelancerController.searchFreelancer);

    //RecoveryPassword routes
    router.post("/recoveryPassword/:change", forgotPasswordController.sendEmail);
    router.post("/resetPassword/:id/:tokenResetPassword", forgotPasswordController.resetPassword);
    //Freelancer routes
    router.get("/freelancer", FreelancerController.findAllFreelancers);
    router.get("/freelancer/:id", FreelancerController.findFreelancerById);
    router.get("/freelancer/profile/:id", FreelancerController.profileInfoFreelancerById);
    //router.get("/freelancer/profile/:username", FreelancerController.profileInfoFreelancerByUsername);


    //ShoppingSession routes
    router.post("/shopping/addItem", ShoppingController.addItemToSession);
    app.use("/", router);
};