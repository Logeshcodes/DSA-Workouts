function bubbleSort(arr){

    for(let i=0;i<arr.length ;i++){
        for(let j=i+1 ; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                [arr[i] , arr[j]] = [arr[j] , arr[i]]
            }
        }
    }

    return arr ;

}

let arr = [7 , 8 , 5 , 4 , 1, 9 ]

console.log(bubbleSort(arr ))