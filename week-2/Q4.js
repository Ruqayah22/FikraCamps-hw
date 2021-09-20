// done
// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(array){
    const separate_arrays = [] ;

    const keys = Object.keys(array);
    keys.sort();
    separate_arrays.push(keys);

    const values = Object.values(array);
    values.sort();
    separate_arrays.push(values);

    return separate_arrays;

}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

console.log(keysAndValues({ b: 2, c: 3, a: 1 }));