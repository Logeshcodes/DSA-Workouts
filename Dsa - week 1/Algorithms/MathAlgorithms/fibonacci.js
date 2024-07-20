function fibanacci(n){

    if(n==0) return []
    if(n==1) return [0]

    let arr = [0,1]

    for(let i=2;i<n;i++){
        arr[i] = arr[i-1] + arr[i-2] ;
    }

    return arr;
}


console.log(fibanacci(0))
console.log(fibanacci(1))
console.log(fibanacci(5))
console.log(fibanacci(8))