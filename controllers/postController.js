const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

const path = require('path')
const multer = require('multer')


exports.diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

exports.fileUpload = multer({
    storage: this.diskStorage,
}).single('image')


exports.findAll = (req, res) =>{
    Post.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.postTitle) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    imageUrl = path.join('/images/',req.file.filename)

    const post = {
        postTitle: req.body.postTitle,
        FreelancerId: req.body.freelancerId,
        postDescription: req.body.postDescription,
        postPrice: req.body.postPrice,
        PostCategoryId: req.body.postCategory,
        thumbnailUrl: imageUrl,
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

/* Recibe la imagen como dataform */
exports.uploadImage = (req, res) => {
    console.log(req.file.filename)
}

/**
 * Basicamente un update para anadir la imagen. Pero lo dejo por si hay que modificar
 * Al igual que el update
 * Toma la id del post como parametro y el nombre de la imagen en un body para quizas evitar problemas con caracteres y tales.
 */
exports.addImageToPost = async (req, res) => {
    const postId = req.params.id;
    Post.update(req.body, {
        where: { id: postId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Post with id=${postId}. Maybe Post was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + postId
            });
        });
}

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

exports.getRelatedPosts = (req, res) => {
    //gets posts in the same category
    //their freelancer
    const postId = req.params.id
    Post.findAll({
        where: {
            PostCategoryId: postId,
            [Op.not]: {
                id: postId
            }
        },
        include: [{
            model: db.Freelancer,
            attributes: ['id', 'freelancerRating'],
            required: true,
            include: {
                model: db.User,
                attributes: ['username', 'firstName', 'lastName']
            }
        }
        ]
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
