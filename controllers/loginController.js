const db = require("../models");
//const connection = require("express");
const User = db.User;
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcryptjs")

exports.login = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    // Ensure the input fields exists and are not empty
    if (email && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        const search = await User.findOne({ where: { email: email} });
        if (search === null) {
            res.status(400).send('Nombre de usuario incorrecto');
            res.end();
        } else {
            // Authenticate the user
            //req.session.loggedin = true;
            //req.session.username = username;
            // Redirect to home page
            // res.redirect('/home');
            bcrypt.compare(password, search.password, (err,match) => {
                if (err) throw err
                if (!match) {
                    res.status(400).send('La contraseña es incorrecta.')
                    res.end();
                }
                else{
                    res.send(generateToken(search));
                    res.end();
                }
            })
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

    } else {
        res.status(400).send('Por favor ingrese todos los campos');
        res.end();
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

function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };

    const jwt = nJwt.create(claims,secretKey);

    return jwt.compact();
}