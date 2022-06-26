const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

exports.getRecommendations = async (req, res) =>{
    let recommendation = [];
    let p = 3;
    let priorityId = await Post.getIdFromPriority(p);
    for (let i=0; i<13; i++){
        if (priorityId.length !== 0){
            const randomIndex = Math.floor(Math.random()*priorityId.length);
            const item = priorityId.splice(randomIndex,1);
            recommendation.push(item[0]);
        }
        else {
            if (p-1 > 0){
                p = p-1
                priorityId = await Post.getIdFromPriority(p);
            }
            else {
                break
            }
        }
    }
    res.send(recommendation)
};