// done
/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

 function BestProfit(arr) {
    var maxNumber = arr[0];
    var minNumber = arr[0];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= maxNumber) {
        maxNumber = arr[i];
      }
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] < minNumber) {
          minNumber = arr[j];
        }
      }
    }
    return "the max = " + maxNumber + " and the min = " + minNumber;
  }
  var array = [150, 146, 142, 143, 145, 144];
  
  console.log(BestProfit(array));
  