// working of this keyword

// Value of this when invoked as a method
const example = {
  blog: "learnersbucket",
  displayBlog: function () {
    console.log(this === example);
    console.log(this.blog);
  },
};

example.displayBlog();

// If we extract the method and save it in a variable ,
//  then invoke the variable, the outcome will change

const example2 = {
  blog: "learnersbucket",
  displayBlog: function () {
    console.log(this === example2); //false
    // console.log(this === window); //true
    console.log(this.blog);
  },
};

const display = example2.displayBlog;
display();
