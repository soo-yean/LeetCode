/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [[1]];

    for (let i = 2; i <= numRows; i++) {
        const curr = [1];
        const prev = triangle[triangle.length - 1];

        for (let j  = 0; j < prev.length - 1; j++) {
                curr.push(prev[j] + prev[j + 1]);
        }

        curr.push(1);
        triangle.push(curr);
    }

    return triangle;
};