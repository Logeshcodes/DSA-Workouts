class Graph{
    constructor(){
        this.list = {}
    }


    addvertex(vertex){

        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }

    addEdges(vertex1 , vertex2){

        if(!this.list[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addvertex(vertex2)
        }

        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }

    display(){
        for(let i in this.list){
            console.log(i , '==>' , [...this.list[i]])
        }
    }

    removeEdges(vertex1 , vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }

    removeVertex(vertex){

        for(let neigh of this.list[vertex]){
            this.removeEdges(neigh , vertex)
        }

        delete this.list[vertex]
    }
}

let graph = new Graph()

graph.addEdges('A' , 'B')
graph.addEdges('A' , 'C')

graph.removeVertex('A')

graph.display()