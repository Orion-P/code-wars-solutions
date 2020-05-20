/**
 
  *Problem*

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */


//Solution

function alphabetPosition(text) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let numOutput = [];
    let textInput = [];
    let string = text.toLowerCase();
    
      for (i = 0; i < string.length; i++) {
        if (Boolean(string.charAt(i).match(/[a-z]/i))) {
          textInput.push(string.charAt(i));
        } else {
        continue;
      }  
    };
    
    for (j = 0; j < textInput.length; j++) {
      numOutput.push(alphabet.indexOf(textInput[j]) + 1); 
        }
        let answer = numOutput.toString()
        return answer.replace(/,/g, ' ');
    };