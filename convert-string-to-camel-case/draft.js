
/* Draft

function toCamelCase(str){
  let arr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  for (j = 0; j <= arr.length; j++) {
    if (arr[j] === "-" || arr[j] === "_") {
      arr.splice(j, 2, arr[j + 1].toUpperCase())
    }
    
  }
  let output = arr
  .toString()
  .replace(/,/g, "")
  return output;
}


 //find any - or _ in the string.
 //capitalize the character after every - and _
//remove every - and _
//return the string
*/