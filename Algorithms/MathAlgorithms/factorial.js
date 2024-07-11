function factorial(n){

    if(n==0 || n==1) return 1;

    let res = 1;

    for(let i=2 ;i<=n;i++){
        res *= i;
    }

    return res
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(8))