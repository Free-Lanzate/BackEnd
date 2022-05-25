const db = require("../models");
const User = db.User;
const nodemailer = require("nodemailer")
const {v4: uuidv4} = require("uuid");
const secretKey = uuidv4();
const nJwt = require('njwt');
const bcrypt = require("bcryptjs");
require('dotenv').config();

exports.sendEmail = async (req,res) => {
    if (req.body.email == "") {
        res.status(400).send({
            message:"No se ha enviado el email"
        })
    }

    try {
        const user = await User.findOne({
            where:{email:req.body.email}
        })
        if(!user){
            return res.status(403).send({
                message:"No está registrado el email"
            })
        }

        const jwt = generateToken(user)
        user.update({tokenResetPassword: jwt});

        const transporter = nodemailer.createTransport({
            service:"gmail",
            port: 587,
            secure: false,
            tls:{
                rejectUnauthorized:false
            },
            auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
            }
        });
        const emailPort = 8000;

        const mailOptions = {
            from: 'davidalexz2001@gmail.com',
            to: `${user.email}`,
            subject:'Enlace para recuperar contraseña para Freelánzate',
            text: `http://localhost:${emailPort}/resetpassword/${user.id}/${jwt}`
        };

        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                console.error('Ha ocurrido un error: ', err);
            } else {
                console.log('Respuesta: ', response);
                res.status(200).json('El email para la recuperación ha sido enviado');
            }
        })
    } catch (error) {
    res.status(500).send({
        message:'Ha ocurrido un error',
        error
    })
    }
}

exports.resetPassword = async (req,res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        User.update(req.body, {
            where:{id:req.params.id, tokenResetPassword:req.params.tokenResetPassword}
        });
        res.status(201).send({
            message:'Contraseña actualizada'
        })
    }catch (error) {
        res.status(500).send({
            message:'Error',
            error
        })
    }
}

function generateToken(username){
    const claims = {
        sub: username,
        iss: "https://freelanzate.com"
    };
    const jwt = nJwt.create(claims,secretKey);
    return jwt.compact();
}