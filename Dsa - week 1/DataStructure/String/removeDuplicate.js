function removeDuplicate(str){

    let arr = [] ;

    for(let i=0;i<str.length;i++){
        if(!arr.includes(str[i])){
            arr.push(str[i]);
        }
    }

    return arr.join("");
}

let str = "malayalam";

let res = removeDuplicate(str)

console.log(res)