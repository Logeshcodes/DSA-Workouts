class Node {
    constructor() {
        this.child = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.child[char]) {
                node.child[char] = new Node();
            }
            node = node.child[char];
        }
        node.end = true;
    }
    search(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.child[char]) {
                return false;
            }
            node = node.child[char];
        }
        return node.end;
    }

    suggest(prefix, max) {
        let suggestions = this.autoComplete(prefix);
        if (Array.isArray(suggestions)) {
            let maxSuggest = suggestions.slice(0, max);
            return maxSuggest.join(", ");
        } else {
            return suggestions;
        }
    }

    printWordWithPrefix(node, prefix) {
        let words = [];
        const traverse = (node, currentPrefix) => {
            if (node.end) {
                words.push(currentPrefix);
            }
            for (let char in node.child) {
                traverse(node.child[char], currentPrefix + char);
            }
        };
        traverse(node, prefix);
        return words.length > 0 ? words : `${prefix} : no suggestions found`;
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.child[char]) {
                return `${prefix} : no suggestions found`;
            }
            node = node.child[char];
        }
        return this.printWordWithPrefix(node, prefix);
    }
}

let trie = new Trie();

trie.insert("Logu");
trie.insert("Logesh");

console.log(trie.search("Logu")); // true
console.log(trie.autoComplete("Lo")); // ["Logu", "Logesh"]
