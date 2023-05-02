/*
Undirected Graph - First Implementation

*/

class Graph {
    constructor() {
        this.adjacencyList = {}; //obj
    }

    addVertex(vertex) {
        // accepts a name of a vertex node
        // add a key to adjList with the name of the vertex and set its value to be an empty array
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            console.log("Vertex added...");
        } else {
            console.log("Vertex already exists, no vertex added...");
        }
    }

    addEdge(vertex1, vertex2) {
    // 2 operations
        // find key of vertex1, then push in vertex2
        this.adjacencyList[vertex1].push(vertex2);
        // find key of vertex2, then push in vertex1
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // accept 2 vertices
        // reassign the key of vertex1 = array not containing vertex2
            // filter produces a shallow copy of the array (filtered)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        // reassign the key of vertex2 = array not containing vertex1
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertexToRemove) {
        // accept a vertex to remove
        // loop through the vertices in the adjList with key of 'vertexToRemove'
        let vertices = this.adjacencyList[vertexToRemove]; //array
        console.log(vertices);
        for (let vertex of vertices) {
            // call removeEdge(vertexToRemove, 'any found vertices')
            this.removeEdge(vertexToRemove, vertex);
        }
        // delete the key in adjList
        delete this.adjacencyList[vertexToRemove];
    }

    dfsRecursive(vertex) {
        // accept a starting node vertex
        // create a list to store the end result 
        // create an object to store the visited vertices 

        // create a helper function (vertex)
            // if the vertex is empty (base case)
                // return early 
            // add the vertex it accepts into vistedVertices obj
            // loop over adjacentList neighbors for the key (vertex)
                // if neighbor isn't visited
                    // recurse dfsRec(neighbor)

        // invoke helper(startVertex)
        // return results array

    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("HK");
g.addVertex("LA");
g.addVertex("Japan");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");

g.removeEdge("Dallas", "Aspen");
g.removeVertex("Tokyo");
