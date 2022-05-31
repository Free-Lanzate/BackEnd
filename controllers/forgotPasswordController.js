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
        console.log(jwt)
        user.update({tokenResetPassword: jwt});

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            secureConnection: false,
            port: 587,
            starttls: {
                ciphers:'SSLv3',
                rejectUnauthorized: false
            },
            auth: {
                user: 'freelanzate@hotmail.com',
                pass: 'MpcjDazbJcgmNrnJpbm5'
            }
        });
        const emailPort = 8000;

        const mailOptions = {
            from: 'freelanzate@hotmail.com',
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
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#_.,¡¿]{6,14}$/;
    if (!regExPassword.test(req.body.password)){
        res.send({
            message: "La contraseña debe contener al menos entre 8 y 16 caracteres, un número, una letra minúscula, una letra mayúscula y un caracter especial"
        });
        return;
    }
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