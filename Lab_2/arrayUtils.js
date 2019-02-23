    head = function(array){
        if (array === undefined || !(array instanceof Array) || array.length === 0) {
            throw `${array} is undefined or not an array or is empty`
        }
        else{
            return (array[0]);
        }
    }
    
    last = function(array){
        if (array === undefined || !(array instanceof Array) || array.length === 0) {
            throw `${array} is undefined or not an array or is empty`
        }
        else{
            return (array[array.length-1]);
        }
    }

    remove = function(array, index){
        if (array === undefined || !(array instanceof Array) || array.length === 0) {
            throw `${array} is undefined or not an array or is empty`
        }
        else if (index > array.length-1 || index < 0) {
            throw `${array} index out of bound`
        }
        else {
            array.splice(index,1);
            return (array)
        }
    }

    range = function(end , value){
        var array = [];
        if (end === undefined || isNaN(end)) {
            throw `${end} is undefined or not a number`
        }
        else if (end < 0 ){
            throw `${end} is less than 0`
        }

        else{

            if(value === undefined){
                for (var i = 0; i <= end-1; i++) {
                    array.push(i);
                 }
            }
            else{
                for (var i = 0; i <= end-1; i++) {
                    array.push(value);
                  }
            }
            return (array)
        }

    } 
 countElement = function(array) {
        var counts = {};
        if (array === undefined || !(array instanceof Array)) {
            throw `${array} is undefined or not an array`   
    }

    else{
        for (var i = 0; i < array.length; i++) {
            counts[array[i]] = 1 + (counts[array[i]] || 0);
        }
    }   
    return (counts)
}

isEqual = function(arrayOne, arrayTwo){
    if (arrayOne === undefined || !(arrayOne instanceof Array)) {
        throw `${arrayOne} is undefined or not an array`   
    }
    if (typeof arrayTwo === undefined || !(arrayTwo instanceof Array)) {
        throw `${arrayTwo} is undefined or not an array`   
    }
    else{
        return (JSON.stringify(arrayOne)==JSON.stringify(arrayTwo))
        }
    }


    module.exports = {
        firstName: "Shalin", 
        lastName: "Barot", 
        studentId: "10438998",
        head,
        last,
        remove,
        range,
        countElement,
        isEqual 
    };