function user() {
  return {
    name: "javascript",
    play: function () {
      return {
        ref: this,
      };
    },
  };
}
let output = user();
console.log(output.name); // This will log 'javascript'
console.log(output.play().ref.name); //Undefined
