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

// A generator function in JavaScript is a special type of function that allows you to pause and resume its execution. 

// Real - time - example :


// => Imagine a pause-and-play button on a video. A normal function is like pressing "Play" and watching it till the end. A generator lets you press "Pause", do something else, and then "Play" again — without starting over.