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
    while (alreadyServedNodes.length !== graph.length) {
        const minDistance = distance.getMinNum(alreadyServedNodes);
        if (minDistance.minValue === Infinity) break;
        alreadyServedNodes.push(minDistance.minIndex);
        graph[minDistance.minIndex].forEach((cost, index) => {
            if (cost + minDistance.minValue < distance[index])
                distance[index] = cost + minDistance.minValue;
        });
    }
    return distance;
}

export default dijkstra;
