const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

// Explanation: In this code, you are using objects a, b, and c.
//  You're trying to use b and c as keys to assign values to the object a.
//  However, JavaScript object keys are always converted to strings.
//  So, when you try to use b and c as keys, they are both converted to [object Object], resulting in the same key.
// As a result, the second assignment a[c] = 456 overwrites the first assignment a[b] = 123.
//  Therefore, when you log a[b], it will output 456.
