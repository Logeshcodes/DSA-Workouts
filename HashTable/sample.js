class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size ;
    }

    hash(key){
         let total = 0

         for(let i=0;i< key.length ; i++){
            total += key.charCodeAt(i);
         }

         return total % this.size ;
    }

    set(key , value ){

        let index = this.hash(key);

        let bucket = this.table[index];

        if(!bucket){
            this.table[index] = [ [key , value]]
        }else{

            bucket.push( [key , value]);                       // set differ
        }
    }


    get(key){

        let index = this.hash(key);

        let bucket = this.table[index];

        if( bucket){

            let sameKeyItem = bucket.find( item => item[0] === key);

            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
    }


    remove(key){

        let index = this.hash( key);

        let bucket = this.table[index];

        if(bucket){
            let sameKeyItem = bucket.find( item => item[0] === key);

            if( sameKeyItem){
                bucket.splice( bucket.indexOf(sameKeyItem) , 1);
            }
        }
    }


    print(){

        for(let i=0;i< this.table.length ; i++){
            if( this.table[i]){
                console.log( i , "=>" , this.table[i])
            }
        }
    }


    findOccurrences(){
        let count = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                count += this.table[i].length;
            }
        }
        console.log("Total entries:", count);
    }


    findDuplicates(){
        for (let i = 0; i < this.table.length; i++) {
            let bucket = this.table[i];
            if (bucket && bucket.length > 1) {
                let seen = new Set();
                let duplicates = [];
                for (let [key, _] of bucket) {
                    if (seen.has(key)) {
                        duplicates.push(key);
                    } else {
                        seen.add(key);
                    }
                }
                if (duplicates.length > 0) {
                    console.log(`Bucket ${i} has duplicate keys:`, duplicates);
                }
            }
        }}
}


let hash = new HashTable(50);

hash.set( 'name' , "Logesh");
hash.set( 'age' , 23);
hash.set( 'age' , 25);
hash.set( 'degree' , "BTech");
hash.set( 'mane' , "Logu");

hash.print()
hash.findOccurrences()
hash.findDuplicates()