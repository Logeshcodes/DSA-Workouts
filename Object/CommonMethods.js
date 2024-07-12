let obj = {
    name : "Logesh",
    age : 23 ,
    place : "Chennai",
    "edu-Qualification" : "BTECH"
}

obj.hobbies = "Cricket"

delete obj.hobbies


console.log(obj.name)
console.log(obj["edu-Qualification"])
console.log(obj['name'])

for (let key of Object.keys(obj)) {
    console.log(key);
}

for (let value of Object.values(obj)) {
    console.log(value);
}


for (let [key,value] of Object.entries(obj)) {
    console.log(key ,": " ,value) ;
}