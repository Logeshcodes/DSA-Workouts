function fac(n){

    if(n===0 || n===1 ) return n ;

    return n * fac(n-1) ;
}



console.log(fac(5))