function bubbleSort(arr){
    
    for(let i=0;i<arr.length ; i++){
        for(let j=i+1 ; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                [arr[i] , arr[j]] = [arr[j] , arr[i]]
            }
        }
    }
    
    return arr ;
}

let arr = [7, 9 ,2, 1, 6 , 5, 3, 8]

console.log(bubbleSort(arr))

//time complexity : O(n^2)