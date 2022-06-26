const db = require("../models");
const Review = db.Review;
const Op = db.Sequelize.Op;


exports.addReview = async (req, res) =>{
    if (!req.body.reviewContent){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const review = {
        reviewContent: req.body.reviewContent,
        reviewRating: req.body.reviewRating,
        OrderItemId: req.body.OrderItemId,
        UserId: req.body.UserId
    };
    Review.create(review)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Review."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Review.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Review with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Review.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Review with id=" + id
            });
        });
};

exports.getReviewByUser = async (req, res) => {
    const reviewerId = req.params.userId;
    const orderItemId = req.params.orderItemId;

    await Review.findAll({
        where: {
            OrderItemId: orderItemId,
            UserId: reviewerId
        }/*,
        include: [{
            model: db.Post,
            attributes: ['postTitle', 'postPrice'],
            required: true,
        }
        ]*/
    }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the review."
            });
        });


}