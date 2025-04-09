function longest(str){
    
    let words = str.split(' ');
    
    let long = '';
    
    for(let word of words){
        if( long.length < word.length){
            long = word ;
        }
    }
    
    return long ;
}

let str = 'I love Javascript very much'

console.log(longest(str))