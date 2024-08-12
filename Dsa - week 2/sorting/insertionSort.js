function insertionSort(arr){

    for(let i=1;i<arr.length;i++){

        let numberToInsert = arr[i];

        let j= i-1 ;

        while(j >=0 && arr[j] > numberToInsert){

            arr[j+1] = arr[j];
            j = j-1 ;

        }
        arr[j+1] = numberToInsert ;
    }

    return arr ;
}

const arr = [-2 , -6 , 9 , 6 , 2]

let res = insertionSort(arr)

console.log(res);
