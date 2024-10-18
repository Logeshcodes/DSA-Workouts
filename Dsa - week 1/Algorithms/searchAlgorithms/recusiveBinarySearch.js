function recursiveBinarySearch(arr , target , start , end ){

    // pass  start and end dont be decalared inside ;

    if(start > end ) return -1 ;

    let mid = Math.floor((start+end)/2) ;

    if(arr[mid] === target) return mid ;
    else if ( arr[mid] < target ) return recursiveBinarySearch(arr , target , mid + 1 , end ) ;
    else return recursiveBinarySearch(arr , target , start , mid - 1 );

}

function binarySearch(arr , target){
    return recursiveBinarySearch(arr , target , 0 , arr.length-1 )
}




let arr = [1,2,3,4,5,6,7,8,9] ;
let target = 8 ;

let res = binarySearch (arr , target ) ;

console.log("Index of the target element : ",res);

