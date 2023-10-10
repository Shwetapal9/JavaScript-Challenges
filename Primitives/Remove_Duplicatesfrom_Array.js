// Write a function to remove the duplicate values from an Array

let originalArray = [1, 2, 2, 3, 3, 3, 4, 4, 5];

function uniqueArray(originalArray) {
  const newArr = originalArray.filter((val, i) => {
    // console.log("Value: " + val, "Index :" + i);
    return originalArray.indexOf(val) === i; //checks whether the first occurance or not
  });
  return newArr;
}

console.log(uniqueArray(originalArray));
// Time complexity : O(n^2)

// Approach 2- Using Set

let s1 = new Set(originalArray);
let result = [...s1];
console.log(result);

// Time complexity : O(nlogn)

let arr = [1, 1, 1, 2, 2, 3, 2, 4, 5, 6, 5, 7, 1];

let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isUnique = true;
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) uniqueArr.push(arr[i]);
}

console.log(uniqueArr);
