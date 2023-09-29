// 1. Swap two integers present in variables num1 and num2 without using temporary variable

// Using Destructuring
let num1 = 20;
let num2 = 10;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);

// Using Without Third Variable
let num_1 = 22;
let num_2 = 11;
console.log(num_1,num_2)
num_1 = num_1 + num_2;
num_2= num_1-num_2;
num_1= num_1-num_2;
console.log(num_1,num_2)