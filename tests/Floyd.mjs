import floyd from '../algorithms/Floyd.mjs';
import dijkstra from '../algorithms/Dijkstra.mjs';
import assert from "assert";

const graph = [
    [0,1,Infinity,2,4,Infinity,Infinity],
    [1,0,1,Infinity,Infinity,Infinity,Infinity],
    [Infinity,1,0,Infinity,1,Infinity,3],
    [2,Infinity, Infinity,0,Infinity,2, Infinity],
    [4,Infinity,1,Infinity,0,Infinity,Infinity],
    [Infinity,Infinity,Infinity,2,Infinity,0,1],
    [Infinity,Infinity,3,Infinity,Infinity,1,0],
];

const floydResult = floyd(graph);
const dijkstraResult = [];
graph.forEach((row, index)=>dijkstraResult.push(dijkstra(index, graph)));
assert.deepEqual(floydResult.graph, dijkstraResult);
