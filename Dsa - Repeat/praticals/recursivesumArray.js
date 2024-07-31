
function recursiveSum(arr , index = 0){

    // base case
    if(index === arr.length){
        return 0 ;
    } 

    // recursion function call

    return arr[index] + recursiveSum(arr , index+1)
}


let arr = [1,2,3,4,5];

let res = recursiveSum(arr)

console.log(res)