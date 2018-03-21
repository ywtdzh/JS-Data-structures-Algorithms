import MinHeap from '../structures/MinHeap.mjs';

Array.prototype.getMinNum = function (except) {
    let minIndex = -1, minValue = Infinity, exceptIndex = except || [];
    this.forEach((element, index) => {
        if (element < minValue && exceptIndex.indexOf(index) === -1) {
            minIndex = index;
            minValue = element;
        }
    });
    return {minValue, minIndex};
};

function dijkstra(nodeIndex, graph) {
    const alreadyServedNodes = [nodeIndex];
    const distance = [];
    distance.length = graph.length;
    distance.fill(Infinity);
    distance[nodeIndex] = 0;
    graph[nodeIndex].forEach((cost, index) => {
        distance[index] = cost;
    });
    let distanceReferrer = distance.map((cost, index) => {
        return {index, cost};
    });
    let distanceHeap = new MinHeap(...distanceReferrer);
    distanceHeap.setComparator((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0));
    while (alreadyServedNodes.length !== graph.length) {
        const minDistance = distanceHeap.pop();
        if (minDistance.cost === Infinity) break;
        alreadyServedNodes.push(minDistance.index);
        graph[minDistance.index].forEach((cost, index) => {
            if (cost + minDistance.cost < distance[index]) {
                distance[index] = cost + minDistance.cost;
                distanceReferrer[index].cost = distance[index];
            }
        });
    }
    return distance;
}

export default dijkstra;
