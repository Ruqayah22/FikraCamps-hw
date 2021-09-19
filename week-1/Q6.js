// done
/** Q6
  * Create a function that takes an array of numbers and return both
  *  the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */

 function minMax(array){
    
    var largest= array[0];
    var smallest = array[0] ;
    var maxMinArray = [] ;

    for (var i=0; i<array.length; i++){
        if (array[i] >= largest) {
            largest = array[i];
            
        }
    }
    for (var j=0; j<array.length; j++){
        if (array[j]<smallest) {
             smallest=array[j];
        }
    }
    maxMinArray.push(largest, smallest);
    
    
    return maxMinArray;

}

 console.log(minMax([1, 2, 3, 4, 5]));

