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

            let sameKeyItem = bucket.find( item => item[0] === key)

            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push( [key , value]);
            }

                                   
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


    findDupicates(){
        
        for(let i=0;i< this.table.length ; i++){
            let duplicates = [];
            let set = new Set();
            
            let bucket = this.table[i];
            
            if(bucket){
                
                for(let [ _ , value] of bucket){
                    
                    if( set.has(value)){
                        duplicates.push(value)
                    }else{
                        set.add(value)
                    }
                }
            }
            
            if( duplicates.length > 0){
                console.log(`Bucket ${i} has duplicate Value:`, duplicates);
            }
        }
    }
}


let hash = new HashTable(50);

hash.set( 'name' , "Logesh");
hash.set( 'age' , 25);
hash.set( 'degree' , "BTech");
hash.set( 'mane' , "Logesh");

hash.print()
hash.findOccurrences()
hash.findDupicates()