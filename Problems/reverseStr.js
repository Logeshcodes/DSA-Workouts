function reverseStr(str){

    let res = str.split(' ')
    .map( item => item.split('').reverse().join('')).join(' ')

    return res ;
}

console.log(reverseStr("My Name Is Logesh"))