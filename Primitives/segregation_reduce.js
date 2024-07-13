// We can group a certain set of values depending on our requirements

const arr = [ 1.1 , 2.2 , 2.3, 1.2 , 1.3 , 2.4 ];

const segregate = arr.reduce((prev, curr)=>{
    const floored = Math.floor(curr);

    if(!prev[floored]){
        prev[floored] =[]
    }
    prev[floored].push(curr)
    return prev
},{})

console.log(segregate)

/*
{
1: [1.1, 1.2, 1.3],
2: [2.2, 2.3, 2.4]
}
*/