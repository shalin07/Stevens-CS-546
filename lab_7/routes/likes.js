const express = require("express")
const router = express.Router()
const data = require("../data");
const likesData = data.likes
const ObjectId = require('mongodb').ObjectID;

router.post("/:id", async (req, res) => {
    try {
        let animalId = ObjectId(req.params.id)
        let postId =  ObjectId(req.query.postId)
        await likesData.likePost(animalId, postId)

        res.status(200).send();
    } catch (error) {
        res.status(404).send()
    }
})

router.delete("/:id", async (req, res) => {
    try {
        
        let animalId = ObjectId(req.params.id)
        let postId =  ObjectId(req.query.postId)
        await likesData.unlike(animalId, postId)
        res.status(200).send()
    } catch (error) {
        res.status(404).send()
    }
})
module.exports = router;