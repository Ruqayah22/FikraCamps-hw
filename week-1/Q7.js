// done
/** Q7
  * Create a function that takes an array of numbers 
  * between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */

function missingNum(array) {
    var count = 10;
    var missing ;
    

  for (var i = 1; i <= count; i++) {
    if (array.indexOf(i) === -1) {
      missing = i;
      
    }
  }
  return missing;
  


}
console.log(missingNum([1, 2, 3, 4,6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
 

// another way to solve 
// function missingNum(array) {
//   var count = 15;
//   // var missing ;
//   var missing = [];

// for (var i = 1; i <= count; i++) {
//   if (array.indexOf(i) === -1) {
//     // missing = i;
//     missing.push(i);
//   }
// }
// return missing;



// }
// console.log(missingNum([1, 2, 3, 4,6, 7, 8, 9, 10 , 11, 12,13,15]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));



  