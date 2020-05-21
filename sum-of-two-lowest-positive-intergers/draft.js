
/* Draft

//Algorithm
//1. Find the smallest values in the array.

//How can I do this? Use Math.min();

//2. Add them and return the value

//Solution

function sumTwoSmallestNumbers(numbers) {  
  let lowestNum = Math.min(...numbers);
  console.log("Lowest Num: " + lowestNum)
  let index = numbers.indexOf(lowestNum);
  numbers.splice(index, 1);
  console.log("new Array: " + numbers)
  return lowestNum += Math.min(...numbers);

}
*/

