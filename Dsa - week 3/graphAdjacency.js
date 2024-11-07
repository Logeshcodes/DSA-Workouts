const matrix = [
    [ 0 , 1 , 0],
    [ 1 , 0 , 1],
    [ 0 , 1 , 0]
]

console.log(matrix[1][0]);

adjacencyList = {
    "A" : ["B"],
    "B" : ["A" ,"C"],
    "C" : ["B"]
}

// console.log(adjacencyList["C"]);

for(let i in adjacencyList){
    console.log(adjacencyList[i])
}
