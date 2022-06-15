const db = require("../models");
const User = db.User;
const Freelancer = db.Freelancer;
const Op = db.Sequelize.Op;


exports.findAllFreelancers = (req, res) =>{
    Freelancer.findAllFreelancers()
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

exports.findFreelancerById = (req, res) => {
    const idFreelancer = req.params.id;
    Freelancer.findFreelancerById(idFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${idFreelancer}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding Freelancer with id=" + idFreelancer
            })
        })
}

exports.profileInfoFreelancerById = (req, res) => {
    const idFreelancer = req.params.id;
    Freelancer.profileInfoFreelancerById(idFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${idFreelancer}.`
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error finding Freelancer with id=" + idFreelancer
                })
            });
}

exports.searchFreelancer = (req, res) => {
        keyword = req.query.keyword
        Freelancer.findAll({
            where: {
                //Luego veo si puedo hacer todo esto mas corto, pero no vi como en la documentacion
                //Busca en el nombre, apellido, usuario, titulos de posts y descripciones.
                [Op.or]: [
                    {
                        freelancerDescription: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$User.firstName$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    }, 
                    {
                        '$User.username$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$User.lastName$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$Posts.postTitle$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$Posts.postDescription$':  {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                ]
            },  
            include: [
                {
                    model: db.User,
                    attributes: ['username', 'firstName', 'lastName'],
                    as: 'User',
                    required: true
                },
                {
                    model: db.Post,
                    as: 'Posts',
                    attributes: [],
                    required: false     
                }
            ]
        })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving the freelancers."
            });
          });
};
/*exports.profileInfoFreelancerByUsername = (req, res) => {
    const usernameFreelancer = req.params.username;
    Freelancer.profileInfoFreelancerByUsername(usernameFreelancer)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Freelancer with id=${usernameFreelancer}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error finding Freelancer with id=" + usernameFreelancer
            })
        });
}*/