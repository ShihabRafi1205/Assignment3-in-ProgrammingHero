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

let otp = validOtp("ph-10985");
console.log(otp);
