hoistedVariable = 3;
console.log(hoistedVariable);  //3
var hoistedVariable;

//Explaination: even though the variable declaration is hoisted to the top,
//  the initialization remains in its original position. Therefore, the assignment 
//  takes place before the console.log statement. As a result, 'hoistedVariable' is assigned the value 
//  3 before it is logged to the console.