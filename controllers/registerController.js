const db = require("../models");
const User = db.User;
const Freelancer = db.Freelancer;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs")

exports.register = async (req, res) => {
    // Create an User
    const user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
        avatarUrl: req.body.avatarUrl,
        createdAt: currentTime()
    };
    const freelancer = {
        isFreelancer: req.body.isFreelancer
    }
    bcrypt.hash(user.password, 10).then(async (hash) => {
        user.password = hash;
        await User.create(user)
            .then((user) => {
                if (freelancer.isFreelancer) {
                    res.send(generateToken(user.id));
                }
            })
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });
};

exports.registerFreelancer = (req,res) => {
    const token = req.body.token
    const freelancer = {
        freelancerRating: req.body.freelancerRating,
        oneliner : req.body.oneliner,
        websiteUrl : req.body.websiteUrl,
        freelancerDescription: req.body.freelancerRating,
        createdAt : currentTime(),
        userId: userId(token)
    }
    Freelancer.create(freelancer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}

function currentTime(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}
const secretKey = uuidv4();
const nJwt = require('njwt');
function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };
    const jwt = nJwt.create(claims,secretKey);
    return jwt.compact();
}
function userId(token){
    nJwt.verify(token, secretKey, (err, decodedToken) => {
        return decodedToken
    })
}