function linearSearch(arr,target){

    for(let i=0 ;i< arr.length-1 ;i++){

        if(arr[i]=== target) return i ;
        
    }
    return -1 ;
}

let arr = [1,2,3,4,5,6,7,8,9] ;

let target = 5 ;

let res = linearSearch(arr ,target)

console.log("Index of the target element : ",res);
