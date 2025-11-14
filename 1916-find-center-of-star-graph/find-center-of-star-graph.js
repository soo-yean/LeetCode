/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    // const graph = {};

    // for (e of edges) {
    //     graph[e[0]] = graph[e[0]] ? [...graph[e[0]], e[1]]: [e[1]];
    //     graph[e[1]] = graph[e[1]] ? [...graph[e[1]], e[0]] : [e[0]];
    // }

    // for (v in graph) {
    //     if (graph[v].length === edges.length) return +v;
    // }

    const u1 = edges[0][0];
    const v1 = edges[0][1];

    const u2 = edges[1][0];
    const v2 = edges[1][1];

    if (u1 === u2 || u1 === v2) {
        return u1;
    } else {
        return v1;
    }
};