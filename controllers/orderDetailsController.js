const db = require("../models");
const orderItem = require("../models/orderItem");
const post = require("../models/post");
const OrderDetails = db.OrderDetails;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.userId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const orderDetails = {
        UserId: req.body.userId,
        orderTotal: req.body.orderTotal
    };
    OrderDetails.create(orderDetails)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the OrdeDetail."
            });
        });
};

/**
* Get all orders (all items) brought by an User
* @param {req} request
* @param {res} response
* @returns {array} the list of Orders, with the information of the related jobs/items
*/
exports.findAllOrderedItemsByUser = (req, res) => {
    OrderDetails.findAll({
        where:
        {
            id: req.params.id
        },
        include: [{
            model: db.OrderItem,
            attributes: ['PostId'],
            required: true,
            include: {
                model: db.Post,
                attributes: ['PostName'],
                required: true,
            }
        }
    ]})
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