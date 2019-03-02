const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

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
        animalType: animalType
    };
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add animal"};

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
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
    const obj = {};
    if(!id){ 
        throw "You must provide an id to search for";
        }
    
    const animalCollection = await animals();
    ObjectId = require('mongodb').ObjectID;
    const a = await get(id)
    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${id}`;
        }

    obj.deleted = true;
    obj.data = a
    return obj;  

}

async function rename(id, newName){
    if(!id){ 
        throw "You must provide an id to search for";
        }
    if(!newName){
        throw "You must provide new name"
    }

    const animalCollection = await animals();
    const animal = await this.get(id)
    ObjectId = require('mongodb').ObjectID;
    let updateAnimal = { $set:{
        name: newName,
        animalType: animal.animalType
    }};

    const updateInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, updateAnimal);
    if (updateInfo.modifiedCount === 0) {
      throw "could not update animal successfully";
    }
    return await this.get(id)
}

 

module.exports={
    firstName: "Shalin", 
        lastName: "Barot", 
        studentId: "10438998",
        create,
        get,
        getAll,
        remove,
        rename
}