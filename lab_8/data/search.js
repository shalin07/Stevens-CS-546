const axios = require('axios')
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }


  const exportedMethods = {
  async getPersonById(id) {
    try{
      const peopledata = await getPeople()
      const object = []
      if(typeof id === undefined || (!id) || typeof id === 'number') throw "Enter ${id} or is not of proper type";
      if(id < 0 || id > 500) throw "id is out of bound";
      object.push(peopledata[id-1])
      return(object)
    }
    catch(err){
      return(err)
    }
  },

async getPersonByName(name){
  const obj = []
  let a = 0;
  const peopledata = await getPeople()
  if(typeof name === 'undefined' || typeof name !== "string"){
      throw `${name} is not a number or missing`;
  }
  for(i=0; i<500; i++){
    let z = peopledata[i].firstName.toLowerCase().includes(name.toLowerCase()) || peopledata[i].lastName.toLowerCase().includes(name.toLowerCase()) ;
    if(z && a < 20){
      obj.push(peopledata[i])
      a++
    }  
  }
  return obj;

  }

}

module.exports = exportedMethods;