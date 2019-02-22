const axios = require('axios')
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }
  async function getWork(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    return data // this will be the array of people
  }


async function whereDoTheyWork(firstName, lastName){
    const peopledata = await getPeople()
    const workdata = await getWork()

    if(typeof firstName === 'undefined' || typeof firstName !== 'string'){
        throw `Enter first name orname undefined`
    }
    if(typeof lastName === 'undefined' || typeof lastName !== 'string'){
        throw `Enter last name or name undefined`
    }
    for(i=0 ; i<peopledata.length; i++){
        if(firstName === peopledata[i].firstName && lastName === peopledata[i].lastName){
            var y = peopledata[i].ssn
            for(j=0; j<workdata.length; j++){
                if(y===workdata[j].ssn){
                    if(workdata[j].willBeFired){
                        return (firstName+" " +lastName+ " - " +workdata[j].jobTitle+ " at " + workdata[j].company+". They will be fired.")
                     }
                     else{
                         return (firstName+" " +lastName+ " - " +workdata[j].jobTitle+ " at " + workdata[j].company+". They will not be fired.")
                        }
                    }
                }
            }
        if(i===499){
            return (firstName+ " " + lastName +" not found") 
                }
            
    }
}
async function findTheHacker(ip){
    const peopledata = await getPeople()
    const workdata = await getWork()

    if(typeof ip === 'undefined'){
        throw  `Ip address not present`
    }
    // regular expression to check ip address is valid or not
    var rx=/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    if(rx.test(ip)){
    for(i=0; i<workdata.length; i++){
        if(ip === workdata[i].ip){
            var x = workdata[i].ssn
            for(j=0; j<peopledata.length; j++){
                if(x === peopledata[j].ssn){
                return (peopledata[j].firstName +" " + peopledata[j].lastName + " is a hacker")
                }
            }
            break
        }
        if(i===499){
            return ("Hacker not found")
            }
        }
    }
else{
    throw `Ip address invalid`
}
    
}

module.exports = {
    firstName: "Shalin", 
    lastName: "Barot", 
    studentId: "10438998",
    findTheHacker,
    whereDoTheyWork
}