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
let vote = gonoVote(12345);
console.log(vote);
