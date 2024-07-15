// Promise.all Polyfill

const myPromiseAll = function (taskList) {
  // to store results
  const results = [];

  // to track how many promises have completed
  let promisesCompleted = 0;

  // return a new Promise

  return new Promise((resolve, reject) => {
    taskList.forEach((task, index) => {
      // if promise passes
      task
        .then((val) => {
          // store its outcome and increment the count

          results[index] = val;
          promisesCompleted += 1;

          // if all the promises are completed
          // resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Test Case 1

// Input:

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(`this promise resolved in ${time} milliseconds`);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

// run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch((err) => {
    console.log(err);
  });
