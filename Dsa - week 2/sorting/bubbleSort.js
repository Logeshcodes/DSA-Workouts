function bubbleSort(arr){

    let swapped 

    do {
        swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp ;

                swapped = true
            }
        }
    } while (swapped)

    return arr ;
}


let arr = [-9 , -10 , 0 , 5, 2,6];

let res = bubbleSort(arr)

console.log(res);
