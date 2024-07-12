let arr = [1,2,3,4,5]

arr.push(6)
arr.unshift(0)
arr.pop()
arr.shift()


console.log(arr)

// map

let arr2 =arr.map((a)=>a+2)

console.log(arr2)

// filter

let arr3 = arr.filter((a)=>a%2==0)

console.log(arr3)

// reduce

let arr4 = arr.reduce((acc,curr)=>  acc+curr)

console.log(arr4)

// concat

let arr5 = arr.concat(arr3)

console.log(arr5)

// splice 

// start , deleteCount , add.....

let arr6 = arr5.splice(5,2,9)

console.log(arr5)
console.log(arr6)

// slice - it doesnt change the original array

let arr7 = arr5.slice(4,5)

console.log(arr7)



