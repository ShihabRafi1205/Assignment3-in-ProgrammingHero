//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    let discountedPrice = currentPrice - (currentPrice * discount) / 100;
    return discountedPrice.toFixed(3);
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp === "string") {
    if (otp.length === 8 && otp.startsWith("ph-")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  let sumAll = omr.right + omr.wrong + omr.skip;
  if (sumAll === 100) {
    let totalNumber = omr.right - 0.5 * omr.wrong;
    return Math.round(totalNumber);
  } else {
    return "Invalid";
  }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (Array.isArray(array)) {
    let ha = [];
    for (let vote of array) {
      if (vote === "ha") {
        ha.push(vote);
      }
    }
    let na = [];
    for (let vote of array) {
      if (vote === "na") {
        na.push(vote);
      }
    }
    if (ha.length > na.length) {
      return true;
    } else if (ha.length === na.length) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str == "string" && str !== "") {
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
