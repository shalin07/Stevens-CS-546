const mongoCollections = require("./collections");
const animals = mongoCollections.animals;
const posts = require("./posts");
const uuid = require("uuid/v4");

  async function create(name, animalType){
    if(!name){
        throw "You must provide a name for your animal"
    }
    if(!animalType){
        throw "You must provide a animal type"
    }

    const animalCollection = await animals();    
    let newAnimal = {
        name: name,
        animalType: animalType,
        likes: [],
        posts: []
    };
    return animalCollection
    .insertOne(newAnimal)
    .then(newInsertInformation => {
      return newInsertInformation.insertedId;
    })
    .then(newId => {
      return this.get(newId);
});
}

  async function getAll(){
    const animalCollection = await animals();
    const animal = await animalCollection.find({}).toArray();

    return animal;

}

  async function get(id){
    ObjectId = require('mongodb').ObjectID;
    if(!id){
        throw "You must insert id"
    }
    const animalCollection = await animals();
    const animal1 = await animalCollection.findOne({ _id: ObjectId(id) });
    if (animal1 === null) throw "No animal with that id";

    return animal1;
}

  async function remove(id){
    const object = {};
    if(!id){ 
        throw "You must provide an id to search for";
        }
    
    const animalCollection = await animals();
    ObjectId = require('mongodb').ObjectID;
    const animal = await get(id)
    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
        }

    object.deleted = true;
    object.data = animal;
    return object;  

}

  async function updateAnimal(id, updatedAnimal) {
	  
	var ObjectId = require('mongodb').ObjectID;
	const animalCollection = await animals();

    const updatedAnimalData = {};

    if (updatedAnimal.name) {
      updatedAnimalData.name = updatedAnimal.name;
    }

    if (updatedAnimal.animalType) {
      updatedAnimalData.animalType = updatedAnimal.animalType;
    }

    let updateCommand = {
      $set: updatedAnimalData
    };
    const query = {
      _id: id
    };
    
	const updateInfo = await animalCollection.replaceOne({ _id: ObjectId(id) }, updateCommand);
	
	 if (updateInfo.modifiedCount === 0) {
      throw "could not update animal successfully";
    }

    return await this.get(id);  

        
    }

 

  module.exports={
    firstName: "Shalin", 
        lastName: "Barot", 
        studentId: "10438998",
        create,
        get,
        getAll,
        remove,
        updateAnimal
}