function longest(str){

    let arr = str.split(" ");

    let long = 0;

    let word = '' ;

    for(let i=0;i< arr.length ;i++){
        if(arr[i].length > long){

            long = arr[i].length;
            word = arr[i]
        }
    }

    return word ;
}


let str = "this is an Apple tree";

let res = longest(str)

console.log(res)