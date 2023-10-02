var myObject = {
  foo: "bar",
  func: function () {
    console.log("outer func: this.foo= " + this.foo);
  },
  func2: () => {
    console.log("outer func2: this.foo  = " + this.foo);
  },
};
myObject.func(); // outer func: this.foo= bar (refers to current context)
myObject.func2(); // outer func2: this.foo  = undefined (refers to window object)
