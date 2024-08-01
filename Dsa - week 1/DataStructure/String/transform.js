function transform(str,count){

    let res = '';

    for(let i=0;i< str.length;i++){

        let value = str.charCodeAt(i);
        value += count ; 
        res += String.fromCharCode(value) ;
    }

    return res ;
}


let a = "ABCD";

let res = transform(a, 4)

console.log(res);