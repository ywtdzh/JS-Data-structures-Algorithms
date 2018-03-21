function floyd(graph) {
    const path = [];
    graph.forEach(() => path.push([]));
    path.forEach(row => {
        row.length = graph.length;
        row.fill(-1);
    });
    for (let k = 0; k < graph.length; k++) {
        for (let start = 0; start < graph.length; start++) {
            for (let end = 0; end < graph.length; end++) {
                if (graph[start][end] > graph[start][k] + graph[k][end]) {
                    graph[start][end] = graph[start][k] + graph[k][end];
                    path[start][end] = k;
                }
            }
        }
    }
    return {graph, path};
}

export default floyd;
