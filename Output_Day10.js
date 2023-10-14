function* number() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
    yield i;
  }
}
const y = number();
number().next(); //0
number().next(); //0
number().next(); //0

// Explaination :function* number() defines a generator function number().
// In the for loop within the generator function, it iterates from 0 to 2 (i starts at 0 and runs while i is less than 3).
// Within the loop, it console.log(i);, which means it prints the value of i to the console.
// It then yields the value of i using yield i;, effectively pausing the function and returning the value of i to the caller.
// The const y = number(); line creates a generator object y from the number() generator function.
// The following three lines, number().next();, number().next();, and number().next();, each create a new generator object by calling number() again, and then immediately call next() on each of them.
// The important thing to note here is that each time number() is called, it starts from the beginning of the generator function. So, calling number().next(); will start the generator from the beginning and run it up to the first yield statement (printing 0), then immediately return an object with the value 0. The same happens for the subsequent calls. As a result, you'll see 0 printed to the console three times, and each next() call will return an object with the value 0.
// If you want to work with the same generator y, you should call y.next() instead of creating new generator instances with number().next();. This way, you can iterate through the generator's values in a sequential manner.
