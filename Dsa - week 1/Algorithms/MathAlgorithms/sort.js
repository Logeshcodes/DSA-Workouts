let arr = [4, 2, 8, 1,3,5];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n ; i++) {
        for (let j = i+1; j < n ; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}



console.log(bubbleSort(arr));
