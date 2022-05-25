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