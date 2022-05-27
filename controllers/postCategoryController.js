const db = require("../models");
const PostCategory = db.PostCategory

/**
* @param {req} request
* @param {res} response
* @returns {array} all categories with their ids and names.
*/
exports.getCategories = (req, res) => {
    PostCategory.findAll({
        attributes: ['id', 'categoryName'],
        order: [['id', 'ASC']]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the categories."
        });
      });
  };
