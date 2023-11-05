// Design a Calulator interface for 2 number inputs which can perform
//  sum, difference, product and dividend whenever invoked on the same interface

function calculator(num1, num2) {
  function sum() {
    return num1 + num2;
  }

  function difference() {
    return num1 - num2;
  }

  function product() {
    return num1 * num2;
  }

  function dividend() {
    return Math.floor(num1 / num2);
  }

  return { sum, difference, product, dividend };
}
console.log(calculator(17, 5).difference());
const calc12And5 = calculator(12, 5);
console.log(calc12And5.sum()); // 17
console.log(calc12And5.difference()); // 7
console.log(calc12And5.product()); // 60
console.log(calc12And5.dividend()); // 2
