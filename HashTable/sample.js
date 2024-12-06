class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size ; 
    }


    hash(key){
        let total = 0 ;

        for(let i=0 ; i< key.length ; i++){
            total += key.charCodeAt(i)
        }

        return total % this.size ;
    }


    set(key , value){

        let index= this.hash(key) ;

        let bucket = this.table[index] ;

        if(!bucket){
            this.table[index] = [ [key , value]]
        }else{

            let sameKeyIndex = bucket.find(item => item[0]===key) ;

            if(sameKeyIndex){
                sameKeyIndex[1] = value ;
            }else{
                bucket.push([key , value])
            }
        }
    }

    get(key){

        let index = this.hash(key) ;

        let bucket = this.table[index] ;

        if(bucket){

            let sameKeyIndex = bucket.find(item => item[0]===key) ;

            if(sameKeyIndex){
                return sameKeyIndex[1]
            }
        }

    }



    remove(key){

        let index = this.hash(key) ;


        let bucket = this.table[index] ;


        if(bucket){

            let sameKeyIndex = bucket.find(item => item[0]=== key);

            if(sameKeyIndex){
                bucket.splice(bucket.indexOf(sameKeyIndex) , 1)
            }
        }
    }


    display(){

        for(let i=0;i< this.table.length ; i++){

            if(this.table[i]){
                console.log(i , this.table[i])
            }
        }
    }
}


let table = new HashTable(50);


table.set('name' , 'Logesh')
table.set('mane' , 'Logu')
table.set('age' , 23)

table.get('name');
table.remove('mane');

table.display()