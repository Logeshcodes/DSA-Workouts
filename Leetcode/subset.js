function subset(nums){

    let res = [[]];

    for (let i = 0; i < nums.length; i++) {
      let size = res.length;
  
        for (let j = 0; j < size; j++) {
          res.push([...res[j], nums[i]]);
        }
    }
    return res;

}

let arr = [1,2,3] ;

let result = subset(arr)

// result command ;

console.log(result)