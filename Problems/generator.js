function* multipleOfTwo(limit){

    let count = 0;

    while( count+2 <= 100 && count%2===0){

        yield count+2  ;

        count = count+2 ;

    }
}

let gen = multipleOfTwo(100);

for(let val of gen){
    console.log(val)
}