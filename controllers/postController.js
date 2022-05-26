const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.postTitle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const post = {
        postTitle: req.body.postTitle,
        FreelancerId: req.body.freelancerId,
        postDescription: req.body.postDescription,
        postPrice: req.body.postPrice,
        PostCategoryId: req.body.postCategory,
        thumbnailUrl: req.body.thumbnailUrl,
        adPriority: req.body.adPriority,
    };
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

exports.searchPost = (req, res) => {
    keyword = req.query.keyword
    //Funciona como /search?keyword=algo
    Post.findAll({
        where: {
            [Op.or]: [
                {
                    postTitle:  {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    postDescription: {
                        [Op.like]: `%${keyword}%`
                    }   
                }
            ]
        },     
        include: [{
            model: db.Freelancer,
            attributes: ['freelancerRating'],
            required: true,
            include: {
                model: db.User,
                attributes: ['username', 'firstName', 'lastName']
            }
        },
        {
            model: db.Attachment,
            attributes: ['url'],
            required: false,
        }

        ],
        order: [['adPriority', 'DESC']]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the posts."
        });
      });
  };

exports.getPostInfo = (req,res) => {
    const postId = req.params.id
    Post.getPostInfo(postId)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Post with id=${postId}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error finding Post with id=" + postId,
            err
        })
    });
};