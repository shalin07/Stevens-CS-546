const axios = require('axios')

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    return data // this will be the array of people
  }
async function getWeather(){
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
    return data // this will be the array of weather
  }

async function shouldTheyGoOutside(firstName, lastName){
    const weatherdata = await getWeather()
    const peopledata = await getPeople()
    if(typeof firstName === 'undefined' || typeof firstName !== 'string'){
        throw `Enter first name or name not proper type` 
        }
    if(typeof lastName === 'undefined' || typeof lastName !== 'string'){
        throw `Enter last name or not of proper type`
        }

    for(i=0 ; i<peopledata.length; i++){
            if(firstName === peopledata[i].firstName && lastName === peopledata[i].lastName){
                var y = peopledata[i].zip
                for (j=0; j<weatherdata.length; j++){
                    if(y === weatherdata[j].zip){
                        if(weatherdata[j].temp>=34){
                            return ("Yes, "+ firstName+ " should go outside.")
                        }
                        else{       
                            return ("No, "+ firstName+ " should not go outside.")
                            }
                        }
                    }
                }
        if(i===499){
            throw `${firstName} ${lastName} not found` 
                    }
                }
        
            }
    

module.exports = {
    firstName: "Shalin", 
    lastName: "Barot", 
    studentId: "10438998",
    shouldTheyGoOutside
}