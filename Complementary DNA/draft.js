/* Draft

function DNAStrand(dna){

    //input string, "GCTA", output to be "CGAT";
    //
    let arrInput = [];
    let arrOutput = [];
    for (i = 0; i < dna.length; i++) {
        console.log(dna.charAt(i))
        arrInput.push(dna.charAt(i).toUpperCase());
        console.log(arrInput)
    };
    //check what each character is and match it
    for (j = 0; j < arrInput.length; j++) {
        if (arrInput[j] === "G") {
            arrOutput.push("C");
        } else if (arrInput[j] === "C") {
            arrOutput.push("G");
        } else if (arrInput[j] === "T") {
            arrOutput.push("A");
        } else if (arrInput[j] === "A") {
            arrOutput.push("T");
        } else {
            continue;
        };
  }
  let output = arrOutput
    .toString()
    .replace(/,/g, "")
  return output;
};

*/