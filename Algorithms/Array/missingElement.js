// missing number in an sorted array

const arr = [1,2,4,5];


let sum = 0 , n = arr.length+1 , add = 0;

for(let i in arr){
    sum = n * (n+1) / 2 ;
}

for(let i in arr){
    add = add + arr[i]
}

console.log(sum )
console.log(add )
console.log("Missing Number would be : ", sum-add)
