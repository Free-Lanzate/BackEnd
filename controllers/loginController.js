const db = require("../models");
//const connection = require("express");
const User = db.User;
const { v4: uuidv4 } = require('uuid');
const Op = db.Sequelize.Op;

exports.login = async (req, res) => {
    // Capture the input fields
    let username = req.body.username;
    let password = req.body.password;

    // Ensure the input fields exists and are not empty
    if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        const search = await User.findOne({ where: { username: username, password: password } });
        if (search === null) {
            res.send('Incorrect Username and/or Password!');
        } else {
            let token;
            User.findOne({ where: {username : username} })
                .then(user => {
                    token = generateToken(user);
                    json = {"token": token}
                    res.contentType('application/json');
                    res.send(JSON.stringify(json));
                    res.end();
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving users."
                    });
                });
        }
    }
};

exports.home = (req, res) => {
    //If the user is loggedin
    if (req.session.loggedin) {
        // Output username
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        // Not logged in
        res.send('Please login to view this page!');
    }
    res.end();
};

const secretKey = uuidv4();
const nJwt = require('njwt');

function generateToken(user){
    const claims = {
        sub: user,
        iss: "https://freelanzate.com"
    };

    const jwt = nJwt.create(claims,secretKey);

    return jwt.compact();
}

