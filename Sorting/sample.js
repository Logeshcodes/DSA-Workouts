function selectionSort(arr){

    for(let i=0;i< arr.length ; i++){

        let minIndex = i ;

        for(let j= i+1 ; j< arr.length ; j++){

            if( arr[minIndex] > arr[j]){
                minIndex = j ;
            }
        }

        if( minIndex !== i){
            [ arr[minIndex] , arr[i]] = [ arr[i] , arr[minIndex]]
        }
    }

    return arr ;
}

let arr = [ 8 , 6 , 4 , 2 , 1]

console.log(selectionSort(arr))