const people  = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){
    try{
        const a = await people.getPersonById(43);
        console.log(a)
        }catch(e){
        console.log (e);
    }

    
    try{
        const b = await people.lexIndex(2);
        console.log(b)
        }catch(e){
        console.log (e);
    }

    try{
        const c = await people.firstNameMetrics();
        console.log(c)
        }catch(e){
        console.log (e);
    }

    try{
        const d = await weather.shouldTheyGoOutside("Scotty", "Barajaz");
        console.log(d)
        }catch(e){
        console.log (e);
    }

    try{
        const e = await work.whereDoTheyWork("Robert", "Herley");
        console.log(e)
        }catch(e){
        console.log (e);
    }

    try{
        const f = await work.findTheHacker("79.222.167.180");
        console.log(f)
        }catch(e){
        console.log (e);
    }
}
main()