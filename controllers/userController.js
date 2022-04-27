const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;


// Ejemplo de funcion de controlador
// Corre en http://localhost:8000/list
exports.findAll = (req, res) =>{
    const firstName = req.query.firstName;
    var condition = firstName ? { firstName: { [Op.like]: `%${firstName}%` } } : null;
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.create = (req, res) => {
    if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create an User
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    // Save User in the database
    User.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };