const db = require("../models");
//const connection = require("express");
const User = db.User;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs")

exports.login = async (req, res) => {
    // Capture the input fields
    let username = req.body.username;
    let password = req.body.password;
    // Ensure the input fields exists and are not empty
    if (username && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        const search = await User.findOne({ where: { username: username} });
        if (search === null) {
            res.send('Incorrect Username!');
        } else {
            // Authenticate the user
            //req.session.loggedin = true;
            //req.session.username = username;
            // Redirect to home page
            // res.redirect('/home');
            const match = bcrypt.compare(password, search.password)
            if (!match){
                res.send('Incorrect Password!');
            }
            else{
                res.send(generateToken(username));
            }
        }
        /*connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                // Authenticate the user
                req.session.loggedin = true;
                req.session.username = username;
                // Redirect to home page
                // res.redirect('/home');
                res.send('Ok!');
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });*/
        res.end();
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    };
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

function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };

    const jwt = nJwt.create(claims,secretKey);

    return jwt.compact();
}