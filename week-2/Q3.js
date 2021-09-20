//  done 
// Q3
// Write a function that converts an object into an array,
// where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(array) {
  const entries = Object.entries(array);
 
  return entries;

}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));

//if :
// Object.keys(array); give us the key only .
// Object.values(array); give us the value only .
// Object.entries(array); give us all the key and the value .
