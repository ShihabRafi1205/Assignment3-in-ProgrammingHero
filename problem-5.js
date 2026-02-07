function analyzeText(str) {
  if ( typeof str == "string" && str!== "") {
    let words = str.split(" ");
    let bigWord = "";
    for (let word of words) {
      if (word.length > bigWord.length) {
        bigWord = word;
      }
    }
    let letters = str.split(" ").join("").split("");
    let lettersCount = letters.length;
    // console.log(lettersCount)
    let obj = { longwords: bigWord, token: lettersCount };
    return obj;
  } else {
    return "Invalid";
  }
}

let textAnalyze = analyzeText("");
console.log(textAnalyze);
