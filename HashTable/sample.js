class HashTable{
    constructor(size){
        this.table = new Array(size) ;
        this.size = size ;
    }

    hash(key){

        let total = 0 ;

        for(let i=0;i< key.length ; i++){
            total += key.charCodeAt(i);
        }

        return total % this.size ;
    }

    set(key , value ){

        let index = this.hash(key) ;

        let bucket = this.table[index] ;  // collision handling using separate chaining

        if(!bucket){
            this.table[index] = [[key , value]] ;
        }else{

            let sameKeyItem = bucket.find( item => item[0] === key) ;

            if(sameKeyItem){
                sameKeyItem[1] = value ;
            }else{
                bucket.push([key , value])
            }
        }

    }


    get(key){

        let index = this.hash(key) ;

        let bucket = this.table[index] ;

        if(bucket){

            let sameKeyItem = bucket.find( item => item[0] === key) ;

            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
    }


    display(){

        for(let i=0;i< this.table.length ; i++){
            if(this.table[i]){
                console.log( i , this.table[i])
            }
        }
    }

    remove(key){

        let index = this.hash(key) ;

        let bucket = this.table[index] ;

        if(bucket){
            let sameKeyItem = bucket.find( item => item[0]=== key);

            if(sameKeyItem){
                bucket.splice( bucket.indexOf(sameKeyItem) , 1);
            }
        }
    }
}



let hash = new HashTable(50);


hash.set( 'name' , "Logesh");
hash.set( 'mane' , "Logu");
hash.set( 'age' , 23) ;
hash.set('degree' , 'BTech');

console.log(hash.get('age'));

hash.remove('degree')

hash.display()
