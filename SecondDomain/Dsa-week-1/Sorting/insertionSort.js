function insertionSort(arr){
    
   
    for(let i=1 ; i< arr.length ; i++){
        
        let numberToInsert = arr[i]
        let j = i-1 ;
        
        while(j >= 0 &&  arr[j]> numberToInsert){
            arr[j+1] = arr[j] ;
            j-- ;
        }
        arr[j+1] = numberToInsert
    }
    
    return arr ;
}

let arr = [7, 9 ,2, 1, 6 , 5, 3, 8]

console.log(insertionSort(arr))

//time complexity : O(n^2)