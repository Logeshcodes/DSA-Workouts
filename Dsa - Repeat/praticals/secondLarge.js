function secondLargest(arr){

    let p = 0 ;
    let vp = 0 ;

    for(let i=0;i<arr.length ;i++){

        if(arr[i] > p){
            vp = p 
            p = arr[i]
        }else if(arr[i] > vp && vp < p){
            vp = arr[i]
        }

       
    }

    console.log("Largest : ",p)
    console.log("Second largest : ",vp)
}


let arr = [1,2,3,4,5,6,8]

secondLargest(arr)