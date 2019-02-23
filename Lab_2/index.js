const arrayUtils = require("./arrayUtils")
const stringUtils = require("./stringUtils")
const objUtils = require("./objUtils")

try {
    // Should Pass
    const headOne = head([1,2,4]);
    console.log(headOne)
    console.log('head passed successfully');
 } catch (e) {
    console.error('head failed test case');}
    
try {
   // Should Pass
   const headTwo = head([8,9,10]);
   console.log(headTwo);
   console.log('head passed successfully');
   } catch (e) {
   console.error('head failed test case');}
   
try {
   // Should Pass
   const countChar1 = countChars("Shalin");
   console.log(countChar1)
      console.log('countChar passed successfully');
   } catch (e) {
      console.error('countChar failed test case');}


try {
   // Should Pass
   const countChar2 = countChars("Panthip");
   console.log(countChar2)
   console.log('countChar passed successfully');
   } catch (e) {
   console.error('countChar failed test case');}

try {
   // Should Pass
   const repeat1 = repeat("Panthiv", 2);
   console.log(repeat1)
   console.log('repeat passed successfully');
   } catch (e) {
   console.error('repeat failed test case');}

try {
   // Should Pass
   const repeat2 = repeat("Shalin", 2);
   console.log(repeat2)
   console.log('repeat passed successfully');
   } catch (e) {
   console.error('repeat failed test case');}

try {
   // Should Pass
   var extend1 = extend({ a: 70, x: 4, z: 5},{ x: 0, y: 9, q: 10 })
   console.log(extend1)
   console.log('extend passed successfully');
  } catch (e) {
   console.error('extend failed test case')
  }


try {
// Should Pass
var extend2 = extend({ x: 7, y: 9},{ a: 7, x: 4, z: 9},{ x: 2, y: 2, q: 111 })
console.log(extend2)
console.log('extend passed successfully');
} catch (e) {
console.error('extend failed test case')
}

        