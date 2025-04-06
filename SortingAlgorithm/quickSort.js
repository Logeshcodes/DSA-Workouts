function quickSort(arr){

    if(arr.length < 2) return arr ;

    let left = [];
    let right = [] ;
    
    let pivot = arr[arr.length-1];

    for(let i=0;i< arr.length-1 ; i++){

        if(pivot > arr[i]) left.push(arr[i]);
        else right.push(arr[i])
    }


    return [...quickSort(left) , pivot , ...quickSort(right)]

}

let arr = [ 5 , 7 , 6 , 1  , 4 , 3 , 9 , 2];

console.log(quickSort(arr))