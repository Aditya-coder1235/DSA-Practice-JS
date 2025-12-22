class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
            return true
        }
        return false
    }

    addEdges(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }

    removeEdges(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=>v!==vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                let temp=this.adjacencyList[vertex].pop()
                this.removeEdges(temp,vertex)
            }
            delete this.adjacencyList[vertex]
            return true
        }
        return false
    }
}

const myGraph=new Graph()
myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('P')
myGraph.addEdges('A','P')
myGraph.addEdges('A', 'C')
myGraph.addEdges('A', 'B')
myGraph.removeVertex('C')
console.log(myGraph)