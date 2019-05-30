const express = require('express');
const router = express.Router();
const animalData = require("../data/animals");

router.get("/", async (req,res) => {
    try{
        const animalList = await animalData.getAll()
        res.json(animalList)
    }
    catch(e){
        res.status(500).send();
    }
});

router.post("/", async (req, res) => {
    const blogAnimalData = req.body;
    
  
    if(!blogAnimalData || !blogAnimalData.name || !blogAnimalData.animalType || typeof blogAnimalData.name !== "string" || typeof blogAnimalData.animalType !== "string" ){
      res.status(400).json({ error: "Given information is not in proper format or not present" })
      }
    try{
    const {name, animalType} = blogAnimalData
    const newanimal = await animalData.create(name, animalType);
  
      res.json(newanimal);
    } catch (e) {
      res.status(500).json({ error: e});
    }
  });

router.get("/:id", async (req,res) => {
    console.log(req.params)
      try{
          const animal = await animalData.get(req.params.id)
          console.log(animal)
          res.json(animal)
      }
      catch(e){
          res.status(404).json({message:"No such Animal found"});
      } 
  });

router.put("/:id", async (req, res) => {
  const animalInfo = req.body;                                       

  if (!animalInfo) {
    res.status(400).json({ error: "You must provide data to update a animal" });
    return;
  }

  try {
    await animalData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Animal not found" });
    return;
  }

  try {
    const updatedAnimal = await animalData.updateAnimal(req.params.id, animalInfo);
    res.json(updatedAnimal);
  } catch (e) {
    res.sendStatus(500).json({ error: e });
  }
});

router.delete("/:id", async (req, res) => {
    try {
      await animalData.get(req.params.id);
        } catch (e) {
      res.status(404).json({ error: "No Animal found" });
        }
    try {
          const animal = await animalData.remove(req.params.id);
          res.json(animal)
        } catch (e) {
          res.status(500).json({ error: e });
        }
      });

      module.exports=router;