let str1 = "silent"

let str2 = "listen"


let obj = {}

if(str1.length !== str2.length){
    console.log("Not a anagram");
}else{

    for(let i=0;i<str1.length;i++){

        obj[str1[i]] = ( obj[str1[i]] || 0) + 1 
        obj[str2[i]] = ( obj[str2[i]] || 0) - 1
    }

    for(let keys in obj){
        if(obj[keys]!==0){
            console.log("Not a anagram");
            return ;
        }
    }
    console.log("Anagram");
}