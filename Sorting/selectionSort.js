function selectionSort(arr){
    
    for(let i=0;i< arr.length ; i++){
        
        let minIndex = i ;
        
        for(let j=i+1 ; j< arr.length ; j++){
            if(arr[minIndex] >  arr[j]){
                minIndex = j ;
            }
        }
        
        if(minIndex !== i){
            [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i] ]
        }
    }
    
    return arr ;
}

let arr = [7, 9 ,2, 1, 6 , 5, 3, 8]

console.log(selectionSort(arr))

//time complexity : O(n^2)