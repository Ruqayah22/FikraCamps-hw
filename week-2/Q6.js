// done
// Q6
// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0
function numOfSubbarrays(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        counter++;
    }
     
    }
  
//   return array.length;
  return counter;
}

console.log(numOfSubbarrays([[1, 2, 3]]));
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));
console.log(numOfSubbarrays([1, 2, 3]));