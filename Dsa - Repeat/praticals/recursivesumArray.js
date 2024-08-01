function recursiveSum(arr , index = 0){

    if(index === arr.length) return 0;

    return arr[index] + recursiveSum(arr , index+1);
}


let arr = [1,2,3,4,5]

console.log(recursiveSum(arr));