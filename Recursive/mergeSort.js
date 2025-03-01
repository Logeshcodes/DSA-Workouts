function mergeSort(arr){
    
    if(arr.length < 2) return arr ;
    
    let mid = Math.floor(arr.length / 2);
    
    let leftArr = arr.slice(0 , mid);
    let rightArr = arr.slice(mid) ;
    
    return merge(mergeSort(leftArr) , mergeSort(rightArr)) ;
    
    
}


function merge(leftArr , rightArr) {
    
    let sortedArr = [] ;
    
    while(leftArr.length && rightArr.length ){
        
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    
    return [...sortedArr , ...leftArr , ...rightArr]
}


let arr = [7, 9 ,2, 1, 6 , 5, 3, 8] ;

console.log(mergeSort(arr))



// Time complexity : O(n log n) 

               






