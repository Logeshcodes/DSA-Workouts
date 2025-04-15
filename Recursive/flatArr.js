function flatArr(arr){

    let res  = [] ;

    for(let i=0 ;i< arr.length ; i++){

        if(Array.isArray(arr[i])){
            res = res.concat(flatArr(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res ;

}


let arr = [ 1, 2, [3 , 4, 5] , [ 6 , [7,8]]] ;


console.log(flatArr(arr))