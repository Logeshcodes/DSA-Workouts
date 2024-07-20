function reverse(str){

    let reverse = "" ;

    for(let i=str.length-1 ;i>=0;i--){
        reverse += str[i]
    }

    return reverse ;
}


let str = "madam"
let str2 = "Hello"

let res = reverse(str)
let res2 = reverse(str2)

console.log(res);
console.log(res2);