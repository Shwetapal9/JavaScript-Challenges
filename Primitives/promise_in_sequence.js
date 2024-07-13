// we want to run a promise in a sequence


// helper function to create promise
// that resolves after a certain time
const asyncTask = (time) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Completing ${time}`)
        },100 * time)
    })
}

// create an array of task
const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
    asyncTask(9),

]

// main function to run promise in series

const asyncSeriesExecuter = (promises)=>{
    promises.reduce((acc, curr)=>{
        // return when previous promise is resolved
        return acc.then(()=>{
            // run the current promise
            return curr.then(val => {console.log(val)})
        })
    },Promise.resolve())
}
asyncSeriesExecuter(promises);