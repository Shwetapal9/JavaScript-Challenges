// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.

// Note:
// a) Duplicate elements may be present.

// b) If no such element is present return -1.

const arr = [12, 1 ,35 ,10 ,34, 1]
function secondLargest(arr){

        let largest = arr[0]
        let secondLargest = -1
        
        for(let i=1;i<arr.length ;i++){
            if(arr[i] > largest){
                secondLargest = largest;
                largest = arr[i]
            }
            else if(arr[i] < largest && arr[i]> secondLargest){
                secondLargest = arr[i]
            }
        }
        
        return secondLargest

}
console.log(secondLargest(arr))