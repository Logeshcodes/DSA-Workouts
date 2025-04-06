function fac(n){

    if(n < 2) return n;

    return n * fac(n-1) ;
}

console.log(fac(5))