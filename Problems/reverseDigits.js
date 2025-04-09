function sumDigit(num){
    
    if( num < 10) return num ;
    
    return String(num %10) + sumDigit(Math.floor(num / 10)) 
}

console.log(sumDigit(2234))