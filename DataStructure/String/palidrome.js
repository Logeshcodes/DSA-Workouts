function palindrome(str){

    let start = 0 ;
    let end = str.length-1 ;

    while(start < end ){

        if(str[start] !== str[end]){
            return false ;
        }
        start++ ;
        end-- ;
    }
    return true ;
}

let str = "malayalam"
let str2 = "hello"

let res = palindrome(str)
let res2 = palindrome(str2)

console.log(res);
console.log(res2);