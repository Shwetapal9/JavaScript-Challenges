// Convert a given String to the TitleCase

let str = "my nAme iS rAJkumar";
let strArr = str.split(" ");
console.log(strArr); //[ 'my', 'nAme', 'iS', 'rAJkumar' ]
for (let i = 0; i < strArr.length; i++) {
  strArr[i] =
    strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1).toLowerCase();
}
console.log(strArr.join(" ")); //My Name Is Rajkumar
