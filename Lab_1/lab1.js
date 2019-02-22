const questionOne = function questionOne(arr) {
    var sum=0;
    i = arr.length;
    while (i--){
        sum += Math.pow(arr[i], 2);
               }
    return sum;

                                             }

const questionTwo = function questionTwo(num){
if(num < 1){
    return 0;
           }
if(num===1){
    return 1;
           }
else{
    return questionTwo(num-1) + questionTwo(num - 2);
    }
    
}

const questionThree = function questionThree(text) {
    var vowels = 'aeiouAEIOU';
    var count = 0; 
    for(var x = 0; x < text.length ; x++)
    {
    if (vowels.indexOf(text[x]) !== -1)
    {
      count += 1;
    }
  
  }
  return count;
}

const questionFour = function questionFour(num) {
    
        if(num < 0){
       return NaN;
                   }  
        else if(num === 0){
            return 1;
                          }  
        else{
            return (num * questionFour(num - 1));
            }  
        }     
    

module.exports = {
    firstName: "Shalin", 
    lastName: "Barot", 
    studentId: "10438998",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};