let obj1 = { name: "I love js" };
let arrObj = [obj1];
obj1 = null;
console.log(arrObj); // [ { name: 'I love js' } ]

// Explaination:As we know object variable name is the reference of the object , in simple way object is store in the heap so any variable that is assigned to this object they are just the reference of that object .. means point to that location in the memory.

// So here arrOjb=[obj1] is creating the new reference of the that object inside the array
// Now when we assigned new value to obj1= null then it no longer reference of that object .
// But arrObj is reference of that object so it return [{name:'I love js'}]
// One thing remember that if any reference directly manipulate the value of object
//  it will reflect to all the reference but if the reference is manipulate like reassign
//  some other value then will not effect the other reference of that object.
