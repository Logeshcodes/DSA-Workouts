function* multipleOfFive(limit){
    
    let count = 1;
    
    while( count*5 <= limit){
        yield count*5
        count++;
    }

}

let gen = multipleOfFive(50);

for(let value of gen){
    console.log(value)
}