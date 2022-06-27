const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const ShoppingSession = db.ShoppingSession

/**
* This function returns a list of all Users
* @param {req} request
* @param {res} response
* @returns {array} the list of users
*/

exports.findAll = (req, res) =>{
    const username = req.query.firstName;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al traer los usuarios."
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.username || req.body.username === "") {
        res.status(400).send({
            message: "El nombre de usuario es obligatorio."
        });
        return;
    }
    // Create an User
    const user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    };
    User.create(user)
        .then(data => {
            ShoppingSession({userId: data.id})
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Hubo un fallo al crear el usuario."
            });
        });
};

exports.findUserById = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar al usuario con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo encontrar al usuario con id=" + id
            })
        })
}
exports.profileInfoById = (req, res) => {
    const id = req.params.id
    User.findByPk(id, {
        attributes: ['username', 'firstName', 'lastName', 'email', 'location']
    }).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se pudo encontrar al usuario con id=${id}.`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo encontrar al usuario con id=" + id
            })
        });
}

exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El usuario se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la información del usuario con id=${id}. Quizá el usuario no existe o se dejaron todos los campos vacíos.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Hubo un fallo al actualizar el usuario con id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El usuario fue eliminado de forma correcta."
                });
            } else {
                res.send({
                    message: `No se puede eliminar al usuario con id=${id}. Verifique la información.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se puede eliminar al usuario con id=" + id
            });
        });
};
