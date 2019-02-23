capitalize = function(string){
    if(string === undefined || !(typeof string === "string") ){
        throw `${string} is not a string`
    }
else{
    return (string.charAt(0).toUpperCase() + string.substr(1,string.length-1).toLowerCase())
    }
}

repeat = function(string,num){
    if(string === undefined || !(typeof string === "string") ){
        throw `${string} is not a string`
    }
    if(num === 'undefined' || num < 1){
        throw `${num} is undefined or negative`
    }
    else{
        return (string.repeat(num))
    }
}

countChars = function(string){
    var count = {}
    if(string === undefined || !(typeof string === "string") ){
        throw `${string} is not a string`
    }
    else{
        let string_1 = string.toLowerCase()
        for (var i=0; i<string_1.length;i++) {
            var character = string_1.charAt(i);
            if (count[character]) {
               count[character]++;
            } else {
               count[character] = 1;
            }
        }
    return (count)
}
    }

 module.exports = {
    firstName: "Shalin", 
    lastName: "Barot", 
    studentId: "10438998",
    capitalize,
    repeat,
    countChars 
    };