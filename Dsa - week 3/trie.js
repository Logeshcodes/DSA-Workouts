class TrieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false ;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
}