/*
Undirected Graph - First Implementation

*/

import { Queue } from "../Section21 - Stacks and Queues/Queues/queue_mine.js";
import Stack from "../Section21 - Stacks and Queues/Stacks/stack_mine.js";

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

    dfsRecursive(vertex) { // accept a starting node vertex
        // create a list to store the end result 
        let resultArr = [];
        // create an object to store the visited vertices 
        let vistedVertices = new Object();
        // refer to the graph
        const adjacencyList = this.adjacencyList;

        // create a helper function (vertex)
        function recurse(vertex) {
            if (!vertex) { // if the vertex is empty (base case)
                console.log("Reached Base Case...recursing"); 
                return null;
            }
            // add the vertex it accepts into vistedVertices obj
            vistedVertices[vertex] = true;
            // push into resultsArr
            resultArr.push(vertex);

            // loop over adjacenyList neighbors for the key (vertex) --> forEach loop
            adjacencyList[vertex].forEach(neighbor => {
                // if neighbor isn't visited
                if (!vistedVertices[neighbor]) {
                    // recurse dfsRec(neighbor)
                    return recurse(neighbor);
                }
            }); 
        }
        // invoke helper(startVertex)
        recurse(vertex);
        // return results array
        console.log(adjacencyList);
        console.log(resultArr);
        return resultArr;
    }

    dfsIterativeWithStack(startVertex) { // accept a starting node vertex
        // create a stack to help track vertices (array also works)
        let vertexStack = new Stack();
        // create resultArr 
        let resultArr = [];
        // create object to store visited vertices
        let visited = {};
        // create variable for adjacentList
        const adjacencyList = this.adjacencyList;
        // add starting vertex to the stack + mark as visited
        vertexStack.push(startVertex);

        // while stack has something in it
        while (vertexStack.size > 0) {
            // pop next vertex from stack
            let nextNode = vertexStack.pop();
                // if vertex hasn't been visited yet, 
                if (!visited[nextNode]) {
                    // mark as visited
                    visited[nextNode] = true;
                    // add to result list
                    resultArr.push(nextNode);
                    // push all of its neighbors into the stack
                    adjacencyList[nextNode].forEach(neighbor => {
                        vertexStack.push(neighbor);
                    })
                }
        }
        // return resultArr 
        console.log(resultArr);
        return resultArr;
    }

    dfsIterativeWithArray(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    bfsWithQueue(startVertex) { // accept a starting vertex
        // create a queue (can use an array) 
        let queue = new Queue();
        // place starting vertex in queue
        queue.enqueue(startVertex);
        // create an array to store visitedNodes
        let visitedNodeArr = [];
        // create an object to store visitedNodes (true/false)
        let visitedNodeObj = {};
        const adjacencyList = this.adjacencyList;
        
        // loop as long as there are nodes in the queue
        while (queue.size > 0) {
            // remove the first vertex in queue and push into visitedNodesArr
            let currentNode = queue.dequeue();
            visitedNodeObj[currentNode] = true;
        
            // push node into visitedArr
            visitedNodeArr.push(currentNode);
            // loop over the neighbors of the visited node
            adjacencyList[currentNode].forEach(neighbor => {
                // if not already visited, enqueue the neighbor
                if (!visitedNodeObj[neighbor]) {
                    // mark the (starting) vertex as visited
                    visitedNodeObj[neighbor] = true;
                    queue.enqueue(neighbor);
                    // console.log("current neighbour: " + neighbor);
                    // console.log(visitedNodeObj);
                }
            });
        }
        // return visitedNodeArr
        console.log(visitedNodeArr);
        return visitedNodeArr;
    }

    bfsWithArray(startVertex) {
        // create a queueArr and place startvertex in it
        let queueArr = [startVertex];
        // create arr to store visistedNodes
        let results = [];
        // create object to store nodes visited
        let visited = {};
        // mark start node as visited
        visited[startVertex] = true;
        const adjacencyList = this.adjacencyList;

        // while loop which there are values in the queue
        while (queueArr.length) {
            // remove the first vertex
            let current = queueArr.shift();
            // push it into results
            results.push(current);
            // loop over the neightbors of the shifted of headNode
            adjacencyList[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queueArr.push(neighbor);
                }
            });
        }
        console.log(results);
        return results;

    }
}

// let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("HK");
// g.addVertex("LA");
// g.addVertex("Japan");

// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");

// g.removeEdge("Dallas", "Aspen");
// g.removeVertex("Tokyo");

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

// dfs GT Test Cases
// g.dfsRecursive("A")
// g.dfsIterativeWithStack("A");
// g.dfsIterativeWithArray("A");

// bfs
console.log(g.adjacencyList);
// g.bfsWithQueue("A");
g.bfsWithArray("A");
