class Graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let edges of this.list[vertex]){
            this.removeEdge(vertex,edges)
        }
        delete this.list[vertex]
    }
    display(){
        for(let key in this.list){
            console.log(key,'===> ',[...this.list[key]])
        }
    }
    bfs(start){
        let queue=[start]
        let visited=new Set()
        let result=[]
        visited.add(start)

        while(queue.length>0){
            let vertex=queue.shift()
            result.push(vertex)
            for(let neigh of this.list[vertex]){
                if(!visited.has(neigh)){
                    visited.add(neigh)
                    queue.push(neigh)
                }
            }
        }
        return result

    }
}
let graph=new Graph()
graph.addEdge('A','B')
graph.addEdge('A','C')

graph.display()
// graph.removeVertex('A')
graph.display()

console.log(graph.bfs('A'))