const mongoCollections = require("./collections");
const posts = mongoCollections.posts;
const animals = require("./animals");
// const uuid = require("node-uuid");

const exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts();
    const post = await postCollection.find({}).toArray();
    return post
  },

  async  getPostById(id){
    ObjectId = require('mongodb').ObjectID;
    if(!id){
        throw "You must insert id"
    }
    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: ObjectId(id) });
    if (post === null) throw "No animal with that id";

    return post;
},

  async addPost(title, content, authorID) {
    if (typeof title !== "string" || !title) throw "No title provided or incorrect type";
    if (typeof content !== "string" || !content) throw "No content or not of proper type";
    ObjectId = require('mongodb').ObjectID;
    const postCollection = await posts();

    const AnimalThatPosted = await animals.get(authorID);

    const newPost = {
      title: title,
      content: content,
      author: {
        id: authorID,
        name: `${AnimalThatPosted.name}`
        }
      
    };

  return postCollection
    .insertOne(newPost)
    .then(newInsertInformation => {
      return newInsertInformation.insertedId;
    })
    .then(newId => {
      return this.getPostById(newId);
    });
  },

  async removePost(id) {
    const object = {};
    if(!id){ 
        throw "You must provide an id to search for";
      }
    
    const postCollection = await posts();
    ObjectId = require('mongodb').ObjectID;
    const post = await this.getPostById(id)
    const deletionInfo = await postCollection.removeOne({ _id: ObjectId(id) });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete post with id of ${id}`;
      }

    object.deleted = true;
    object.data = post;
    return object;  

},

  async updatePost(id, updatedPost) {
	var ObjectId = require('mongodb').ObjectID;
  const postCollection = await posts();
  
    const updatedPostData = {};
      if (updatedPost.title) {
        updatedPostData.title = updatedPost.title;
      }
  
      if (updatedPost.content) {
        updatedPostData.content = updatedPost.content;
      }
  
      let updateCommand = {
        $set: updatedPostData
      };
      const query = {
        _id: id
      };
      
    const updateInfo = await postCollection.replaceOne({ _id: ObjectId(id) }, updateCommand);
    
     if (updateInfo.modifiedCount === 0) {
        throw "could not update post successfully";
      }
  
      return await this.getPostById(id);  
  
          
      }
  }
  
module.exports = exportedMethods;