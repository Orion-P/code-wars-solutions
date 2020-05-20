/**Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */



/* Draft
function alphabetPosition(text) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let numOutput = [];
      let textInput = [];
      let string = text.toLowerCase();
       //separate string into individual characters into a new array Ex: "string" to array = ['s', 't'. 'r', 'i', 'n', 'g']
      for (i = 0; i < string.length; i++) {
        if (Boolean(string.charAt(i).match(/[a-z]/i))) {
            textInput.push(string.charAt(i));
            console.log(textInput)
            console.log(textInput.length)
        } else {
        continue;
        }
          
      };

      //see if array[j] ("s") is in the alphabet array, if it is, I need to get the position of where it is located in alphabet and add 1 to it. In this case it is 18 so 18 + 1 is 19. 19 is the value for s. push this value into numOutput 

      for (j = 0; j < textInput.length; j++) {
      numOutput.push((alphabet.indexOf(textInput[j])) + 1); 
        }
        let answer = numOutput.toString()
        return answer.replace(/,/g, ' ');
      };

    
    //A1 B2 C3 D4 E5 F6 G7 H8 I9 J10 K11 L12 M13 N14 O15 P16 Q17 R18 S19 T20 U21 V22 W23 X24 Y25 Z26
*/

//Final

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