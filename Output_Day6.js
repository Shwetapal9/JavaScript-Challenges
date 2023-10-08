var val = 21;

function output() {
  console.log(val);
  var val = 33;
}

output(); //Undefined due to hoisting
