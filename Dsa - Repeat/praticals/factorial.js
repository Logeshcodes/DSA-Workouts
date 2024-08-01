function factorial(n){

    if(n===0 || n===1) return 1 ;

    return n * factorial(n-1);

}

function fibo(n){

    if(n< 2) return n;

    return fibo(n-1) + fibo(n-2) ;
}

console.log(factorial(5));
console.log(fibo(8));