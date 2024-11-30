function quickSort(arr){
    
    if(arr.length < 2) return arr ;
    
    let left = []
    let right = []
    
    let pivot = arr[arr.length-1]
    
    for(let i=0;i< arr.length-1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left) , pivot , ...quickSort(right)]
    
}


let arr = [7, 9 ,2, 1, 6 , 5, 3, 8] ;

console.log(quickSort(arr))



// Time complexity : O(n log n) in Average case

// O(n^2) in worst case






