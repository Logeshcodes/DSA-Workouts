let nums = [11,12,11,23,34,11,34]


let seen = new Set()

for(let i of nums) {
    if(seen.has(i)){
        seen.delete(i)
    }else{
        seen.add(i)
    }
}

console.log([...seen])