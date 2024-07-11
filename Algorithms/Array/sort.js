function sortArray(arr){

    return arr.sort((a,b)=> b-a)
}


function sort(arr){
    return [...arr].sort((a,b)=>a-b)
}


function SelectionSort(arr){

    let n = arr.length ;

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]< arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp ;
            }
        }
    }

    return arr;
}


let arr = [5,6,3,9,1,3,7,0,6]

console.log(sortArray(arr));
console.log(sort(arr));
console.log(SelectionSort(arr));