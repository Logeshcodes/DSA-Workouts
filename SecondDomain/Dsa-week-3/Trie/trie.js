class Node{
    constructor(){
        this.child = {};
        this.end = false ;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){

        let node = this.root;

        for(let char of word){
            if(!node.child[char]){
                node.child[char] = new Node()
            }
            node = node.child[char]
        }
        node.end = true ;
    }

    search(word){

        let node = this.root;

        for(let char of word){
            if(!node.child[char]){
                // node.child[char] = new Node()
                return false
            }
            node = node.child[char]
        }
        return node.end
    }
    startsWith(word){

        let node = this.root;

        for(let char of word){
            if(!node.child[char]){
                // node.child[char] = new Node()
                return false
            }
            node = node.child[char]
        }
        return true ;
    }
}


let trie = new Trie()

trie.insert('Logesh')
trie.insert('Logu')


console.log(trie.search('Logesh'))
console.log(trie.startsWith('Log'))