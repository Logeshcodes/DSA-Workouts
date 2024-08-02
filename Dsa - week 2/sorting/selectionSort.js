function selectionSort(arr){


    // selection Sort

    for(let i=0 ;i<arr.length ;i++){
        for(let j=i+1 ; j< arr.length ; j++){

            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j] ;
                arr[j] = temp ;
            }
            
        }
    }

    return arr ;
}


let arr = [1,4,3,2,5,7,6,9,8];

console.log(selectionSort(arr));