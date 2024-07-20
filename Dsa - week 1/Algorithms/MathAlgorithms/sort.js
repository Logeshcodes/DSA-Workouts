let arr = [4, 2, 8, -1, 9, 3];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function insertionSort(arr){
    for(let i = 1 ; i < arr.length ; i++ ){
        
    }
}

console.log(bubbleSort(arr));
