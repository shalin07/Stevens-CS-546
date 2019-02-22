const axios = require('axios')
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }

async function getPersonById(id){
    const peopledata = await getPeople()
    if(typeof id === 'undefined' || typeof id !== "number"){
        throw `${id} is not a number or missing`;
    }
    else if(id <= 0 || id > peopledata.length){
        throw `${id} is out of bound`
    }
    else{
    return(peopledata[id-1].firstName+" "+peopledata[id-1].lastName);
    }
}

async function lexIndex(index){
    const peopledata = await getPeople()
    peopledata.sort(function(a, b) {
        return a.lastName.localeCompare(b.lastName);
     });
    if(typeof index === 'undefined' || typeof index !== "number"){
        throw `${index} is not a number or missing`;
    }
    else if(index < 0 || index >= peopledata.length){
        throw `${index} is out of bound`
    }
    else{
    return(peopledata[index].firstName+" "+peopledata[index].lastName);
    }
}

async function firstNameMetrics(){
  const peopledata = await getPeople();
  const peopleFirstNames = peopledata.map(x => x.firstName);
  obj ={}
  const sumOfAllFirstNameLengths = peopleFirstNames.reduce(
    (sum, currentName) => sum + currentName.length,
    0
  );
    //   getting sum of all letters in firstName
    obj.totalLetters = sumOfAllFirstNameLengths

    x = peopleFirstNames.join("")
    // getting sum of all vowels in firstName
    obj.totalVowels = x.match(/[aeiou]/gi).length
    // getting sum of all consonants in firstName
    obj.totalConsonants = obj.totalLetters-obj.totalVowels
    
    let max = peopleFirstNames.reduce((r, e) => r.length < e.length ? e : r, ""); // get name max length
    let min = peopleFirstNames.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
      })    // get name with minimum length
    
    obj.longestName = max
    obj.shortestName = min
    
    return obj
}

module.exports = {
        firstName: "Shalin", 
        lastName: "Barot", 
        studentId: "10438998",
        getPersonById,
        lexIndex,
        firstNameMetrics
          }
