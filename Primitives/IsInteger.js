// // 2. Write a function which returns true if given value of number is an integer without using any inbuilt functions

// function isInt(val) {
//   if (val % 1 == 0) return true;
//   return false;
// }

// console.log(isInt(2.03)); //false
// console.log(isInt(2.0)); //true
// console.log(isInt(5)); //true
// console.log(isInt(55)); //true

// // Create a function which returns a random number in the given range of values both inclusive
// function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
//   return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
// }

// const randomnum = randomNumberGeneratorInRange(10, 50);
// console.log(randomnum);

// Write a program to reverse a number

let num = 3459;

function numReversed(num) {
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNum;
}
console.log(numReversed(num));
