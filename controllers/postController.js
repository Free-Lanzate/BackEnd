const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.postTitle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Post
    const post = {
        postTitle: req.body.postTitle,
        FreelancerId: req.body.freelancerId,
        postDescription: req.body.postDescription,
        postPrice: req.body.postPrice,
        PostCategoryId: req.body.postCategory,
        thumbnailUrl: req.body.postPrice,
        adPriority: req.body.adPriority,
    };
    // Save Post in the database
    Post.create(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Post.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Post.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Post with id=" + id
            });
        });
};


