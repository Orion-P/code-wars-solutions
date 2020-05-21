/**
 * 
 * Problem
 * 
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

 //Final

function toCamelCase(str){
  let arr = [];
  
  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  for (j = 0; j < arr.length; j++) {
  
    if (arr[j] === "-" || arr[j] === "_") {
      arr.splice(j, 2, arr[j + 1].toUpperCase())
    }
    
  }
  
  let output = arr
    .toString()
    .replace(/,/g, "")
    
  return output;
  
}

