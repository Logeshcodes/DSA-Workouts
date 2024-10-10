let arr = [1,2,3,4,5,6]

let arr2 = arr.splice(1,4,7,8) // ( index position , number of count remove , add.... ) modified original array

console.log(arr)
console.log(arr2)

let nums = [10,11,12,13,14,15]

let nums2 = nums.toSpliced(2,2, 10) // (index position , number of count remove , add....) didn't modified the original array

console.log(nums)

console.log(nums2)