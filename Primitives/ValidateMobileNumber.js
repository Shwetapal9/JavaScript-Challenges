// Create a regular expression to validate if the given
// input is valid Indian mobile number or not

function validateMobile(str) {
  const regexMobile = /^(\+91|0)?\s?\d{10}$/;
  return regexMobile.test(str);
}

console.log(validateMobile("+91 8588914240")); //true
console.log(validateMobile("+91 9876543210")); // true
console.log(validateMobile("09876543210")); // true
console.log(validateMobile("9876543210")); // true
console.log(validateMobile("99876543210")); //false
