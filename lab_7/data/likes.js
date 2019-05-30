const mongoCollections = require("./collections");
const animals = mongoCollections.animals

module.exports = {
    async likePost(animalId, postId){
        if(!animalId || !postId) throw "You must provide an animalid and a postid"

        const animalCollections = await animals()
    
        const addLike = await animalCollections.updateOne({_id: animalId}, {$addToSet: {likes: {postID:postId}}})
        if(addLike.updateInfo === 0) throw "Liked post not added"
    },
    async unlike(animalId, postId){
        if(!animalId || !postId) throw "You must provide an animalid and a postid"

        const animalCollections = await animals()

        const addLike = await animalCollections.updateOne({_id: animalId}, {$pull: {likes: {postID:postId}}})
        if(addLike.updateInfo === 0) throw "Liked post could not be deleted"
    }
}