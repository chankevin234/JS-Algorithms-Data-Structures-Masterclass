import { PriorityQueue } from "./simplePriorityQueue.js";

/**
 * Weighted Graph/Dijkstra's Shortest Path Algorithm - First Implementation
*/
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // check if the vertex exists as a key value pair in the adjList{}
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            console.log("Added Vertex");
        }
    }

    addEdge(vertex1, vertex2, weight) {
        // add a connection between v1 and v2
        this.adjacencyList[vertex1].push(
            {
                node: vertex2,
                weight: weight
            }
        )
        // add a connection between v2 and v1
        this.adjacencyList[vertex2].push(
            {
                node: vertex1,
                weight: weight
            }
        )
        console.log("Added Edges");
    }

    print() {
        console.log(JSON.stringify(this, null, 4));
    }

    /**
     * Dijkstra's Shortest Path Algorithm function
     * accepts start and end vertices
     * returns the shortest path between 2 points (if possible)
     */
    dijkstraSP(start, finish) { 
        // create 'distances' obj and set each key as each vertex in adjList
        let distances = {}; // distances from start vertex

        // create and add each vertex (infinity ones) to the priority queue
        let nodes = new PriorityQueue();
                
        // create 'previous' object and set the vertices as the keys with value of null
        let previous = {};

        //to return at end
        let shortestPath = []; 
        
        // build up initial state
        for (let vertex in this.adjacencyList) {            
            if (vertex === start) {
                distances[vertex] = 0; // distances to start from start is always 0
                nodes.enqueue(vertex, 0); // starting vertex has priority = 0
            } else {
                distances[vertex] = Infinity; // set other vertices as infinity in distances obj
                nodes.enqueue(vertex, Infinity); // add in the vertices with priority = infinity
            }
            previous[vertex] = null; // all vertices start at null (not visited yet to see it's previously linked vertex)
        }

        let currSmallest;

        // loop as long as the pq has values
        while (nodes.values.length) {
            // deque a vertex from the pq
            currSmallest = nodes.dequeue().val; // lowest priority item's value
            // if vertex = finish, break?
            if (currSmallest === finish) {
                // DONE
                // BUILD UP PATH TO RETURN AT END
                while(previous[currSmallest]) {
                    shortestPath.push(currSmallest);
                    currSmallest = previous[currSmallest];
                }
                break;
            }
            // OTHERWISE ... loop through each value in adjList for that vertex
            if (currSmallest || distances[currSmallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[currSmallest]) {
                    // find neighboring nodes
                    let currVertex = this.adjacencyList[currSmallest];
                    let nextNode = currVertex[neighbor]; // neighboring nodes of a current vertex/slot
                    
                    // calc the new distances to that neighbor vertex from starting vertex
                    let candidate = distances[currSmallest] + nextNode.weight;
                    // if distances < current stored in distances
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNode.node]) {
                        // update distanceObj w/ new distances (update new smallest distance to neighbor)
                        distances[nextNeighbor] = candidate;
                        // update previous obj to contain that vertex (how we got to nextNeighbor)
                        previous[nextNeighbor] = currSmallest;
                        // enqueue vertex w/ total distances from the start node
                        nodes.enqueue(nextNeighbor, candidate);
                    }

                }

            }
        }
        console.log(shortestPath.concat(currSmallest).reverse());
        return shortestPath.concat(currSmallest).reverse();        
    }
}

// let wg = new WeightedGraph();
// wg.addVertex("A");
// wg.addVertex("B");
// wg.addVertex("C");

// wg.addEdge("A", "B", 10);
// wg.addEdge("A", "C", 20);

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.dijkstraSP("A", "E");

// print
// graph.print();