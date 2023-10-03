// Write a program to reverse a string

let str = "Javascript is awesome";

let reversedString = function (str) {
  let result = "";

  // Method 1;
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     result += str.charAt(i);
  //   }

  // Method 2
  for (let i = 0; i < str.length; i++) {
    result = str.charAt(i) + result;
  }
  return result;

  // To check if Pallindrome
  //   if (str == result) return true;
  //   return false;
};

console.log(reversedString(str));
