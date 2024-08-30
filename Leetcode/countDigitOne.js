function countDigitOne(n) {

    let count = 0 ;
    
    for(let i=1;i<=n ; i++){
        let curr = i ;
        while(curr > 0){

            let j = curr % 10 ;
            if(j === 1){
                count++ ;
            }
            curr = Math.floor( curr / 10) ;
        }
    }

    return count ;
};

let res = countDigitOne(824883294)

console.log(res)