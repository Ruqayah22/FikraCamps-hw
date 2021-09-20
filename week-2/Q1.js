// done
// Q1
// Create a function that returns an array of strings sorted by length in ascending order.


// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []

function sortByLength(array){
    const desc = array.sort((a,b) =>  a.length - b.length );

    return desc;
}

console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log([]);


 