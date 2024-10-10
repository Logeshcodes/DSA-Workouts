let arr = [1,2,1,1,1,1,2]

let obj = {};

for(let i of arr){
    if(obj[i])
        obj[i]++ ;
    else
        obj[i]= 1 ;
}

console.log(obj)