function recursionFactorial(n){

    if(n==0 | n==1) return 1;

    return n * recursionFactorial(n-1)

    
}


console.log(recursionFactorial(4))