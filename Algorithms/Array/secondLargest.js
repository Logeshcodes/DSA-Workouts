function secondLarge(arr){

    let p = 0;
    let vp = 0;

    for(let i=0;i<=arr.length;i++){

        if(p < arr[i]){
            vp = p;
            p = arr[i];
        }else if (vp < arr[i] && p > vp ){
            vp = arr[i]
        }
    }

    console.log(p);
    console.log(vp);

}//////////comment aadded

let arr = [89,46,678,89,90]

secondLarge(arr)

