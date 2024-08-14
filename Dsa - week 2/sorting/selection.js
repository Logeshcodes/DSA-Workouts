function selectionSort(arr){

    for(let i=0;i< arr.length;i++){


        let minIndex = i ;

        for(let j=i+1;j< arr.length ;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j ;
            }
        }


        if(minIndex !== i){
            // let temp = arr[i];
            // arr[i]= arr[minIndex];
            // arr[minIndex] = temp ;

            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }

    return arr ;
}

let arr = [5,0,10,-5,-2]

console.log(selectionSort(arr));
