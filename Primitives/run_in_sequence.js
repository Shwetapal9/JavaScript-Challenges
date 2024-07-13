// Let’s say we have an array of functions and a value, the value has to be
// passed through these functions in a pipe. Like the initial value has to
// be passed to the first function and then the returned value from the
// first function has to be passed to the next function and so on.

const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) =>{
    return str.split('').reverse().join('')
}

const append = (str)=>{
    return 'Hello ' + str
}

const arr = [upperCase , reverse, append]

const sequence = arr.reduce((previousvalue, currentElement)=>{

    const newValue = currentElement(previousvalue);

    return newValue
},"Shweta")

console.log(sequence)