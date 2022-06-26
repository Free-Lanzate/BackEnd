const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
const ShoppingSession = db.ShoppingSession

const path = require('path')
const multer = require('multer')


exports.diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images/profiles'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

exports.fileUpload = multer({
    storage: this.diskStorage,
}).single('image')


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
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
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
                    err.message || "Some error occurred while creating the User."
            });
        });
};

/** Recibe la imagen como dataform y devuelve las propiedades del archivo tras ser modificado
 * Por medio de req.file
 */
exports.uploadImage = (req, res) => {

    if(!req.file){
        res.status(500).send({
            message: "Some error ocurred uploading the image"
        })
    } else {
        res.send(req.file) //file.filename almacena el nombre del file en el servidor
    }
}

/**
 * Basicamente un update para anadir la imagen. Pero lo dejo por si hay que modificar
 * Al igual que el update
 * Toma la id del user como parametro y el nombre de la imagen en un body para quizas evitar problemas con caracteres y tales.
 */
 exports.addImageToUser = async (req, res) => {
    const userId = req.params.id;
    User.update(req.body, {
        where: { id: userId }
    })
        .then(num => {
            if (num == 1) {
                console.log("funciona")
                res.send({
                    message: "Post was updated successfully."
                });
            } else {
                console.log("no  funciona")
                res.send({
                    message: `Cannot update Post with id=${userId}. Maybe Post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + userId
            });
        });
}
exports.findUserById = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding User with id=" + id
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
                message: `Cannot find User with id=${id}.`
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error finding User with id=" + id
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
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + id
            });
        });
};


exports.delete = (req, res, model) => {
    const id = req.params.id;
    model.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
