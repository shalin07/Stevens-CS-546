extend = function(...args){
    if(args === undefined || typeof args !== 'object' || args.length < 2){
        throw `$(args) is undefined`
    }
   
    else{
        return (args.reverse().reduce((r,p) => ({...r,...p}),{}))
    }
}

smush = function(...args){
    var out = {};
    if(args === undefined || typeof args !== 'object' || args.length < 2){
        throw `$(args) is undefined`
    }
    else{
    if(!arguments.length)
        return out;
    for(var i=0; i<arguments.length; i++) {
        for(var key in arguments[i]){
            out[key] = arguments[i][key];
        }
    }
    }
    return (out)
}
mapValues = function(object, func){
    if(typeof object !== "object"){
        throw `object invalid`
    }
    if(typeof func !== 'function' )
    {
        throw `function invalid`
    }
        
    else{
        for(let i in object){
            object[i] = func(object[i])
        }
        return object
    }
}

 module.exports = {
    firstName: "Shalin", 
    lastName: "Barot", 
    studentId: "10438998",
    extend,
    smush,
    mapValues 
};