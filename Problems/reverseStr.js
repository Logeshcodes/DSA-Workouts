function reverseStr(str){
    
    let res = str.split(' ')
    .map( val => val.split('').reverse().join('')).reverse().join(' ')
    
    return res ;
}

console.log(reverseStr("My Name Is Logesh"))