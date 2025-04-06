function bubbleSort(arr ){

    for(let i=0;i< arr.length ; i++){
        for(let j = i+1 ; j< arr.length ; j++){

            if(arr[i] > arr[j]){
                [ arr[i] , arr[j]] = [ arr[j] , arr[i] ] ;
            }
        }
    }

    return arr ; 
}

let arr = [ 5 , 7 , 6 , 1  , 4 , 3 , 9 , 2];

console.log(bubbleSort(arr ))