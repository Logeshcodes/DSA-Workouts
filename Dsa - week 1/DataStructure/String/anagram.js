let str1 = "listen"

let str2 = "silent"

let obj = [];

if(str1.length !== str2.length){
    console.log("Not a Anagram")
}else{
    for(let i=0;i< str1.length ;i++){

        obj[str1[i]] = ( obj[str1[i]] || 0) +1 ;
        obj[str2[i]] = ( obj[str2[i]] || 0) -1 ;
    
    
    }
    
    for(let key in obj){
        if(obj[key] !== 0){
            console.log("Not a Anagram")
            return ;
        }
    }
    console.log("Anagram");
}