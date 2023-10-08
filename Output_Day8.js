(function test() {
  var a = 1;
  function test() {
    if (!a) {
      var a = 10;
    }
    console.log(a);
  }
  test();
  console.log(a);
})();
