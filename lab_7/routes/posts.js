const express = require("express");
const router = express.Router();
const animalData = require("../data/animals");
const postData = require("../data/posts");

router.get("/:id", async (req, res) => {
  console.log(req.params)
    try{
        const post = await postData.getPostById(req.params.id)
        console.log(post)
        res.json(post)
    }
    catch(e){
        res.status(404).json({message:"No such Post found"});
    } 
});

router.get("/", async (req, res) => {
  try{
      const PostList = await postData.getAllPosts()
      res.json(PostList)
  }
  catch(e){
      res.status(500).send();
  }
});

router.post("/", async (req, res) =>{
  const blogPostData = req.body;
  

  if(!blogPostData || !blogPostData.title || !blogPostData.content || !blogPostData.authorID || typeof blogPostData.title !== "string" || typeof blogPostData.content !== "string"){
    res.status(400).json({ error: "Given information is not in proper format" })
    }
  try{
  const {title, content, authorID} = blogPostData
  const newpost = await postData.addPost(title, content, authorID);

    res.json(newpost);
  } catch (e) {
    res.status(500).json({ error: e});
  }
});

router.put("/:id", async (req, res) =>  {
  const postInfo = req.body;                                       

  if (!postInfo) {
    res.status(400).json({ error: "You must provide data to update a animal" });
    return;
  }

  try {
    await postData.getPostById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  try {
    const upadtePost = await postData.updatePost(req.params.id, postInfo);
    res.json(upadtePost);
  } catch (e) {
    res.sendStatus(500);
  }
  });

  router.delete("/:id", async (req, res) =>  {
    try {
      await postData.getPostById(req.params.id);
        } catch (e) {
      res.status(404).json({ error: "No Post found" });
        }
    try {
          const post = await postData.removePost(req.params.id);
          res.json(post)
        } catch (e) {
          res.status(500).json({ error: e });
        }
      });
  
  module.exports = router;