function finalScore(omr) {
  let sumAll = omr.right + omr.wrong + omr.skip;
  if (sumAll === 100) {
    let totalNumber = omr.right - 0.5 * omr.wrong;
    return Math.round(totalNumber);
  } else {
    return "Invalid";
  }
}

let bcsScore = finalScore({ right: 67, wrong: 23, skip: 10 });
console.log(bcsScore);

// let sum_right = 0;
// for (let i = 1; i <= right; i++) {
//   sum_right = i;
// }
// console.log(sum_right);
