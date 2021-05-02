function connectedCell(matrix) {
    const ones = getOnes(matrix);
    const seen = {};
    const res = [];

    for (const one of ones) {
        const localRes = [];
        if (!seen[one.join(',')]) {
            go(one);
            res.push(localRes);
        }

        function go(point) {
            const adjacentCoords = makeAdjacentCoords(...point, matrix.length, matrix[0].length);
            for (const adjacent of adjacentCoords) {
                const [x, y] = adjacent;
                if (!seen[adjacent.join(',')] && matrix[x][y] === 1) {
                    localRes.push(adjacent);
                    seen[adjacent.join(',')] = 1;
                    go(adjacent);
                }
            }
        }
    }

    return Math.max(...res.map((arr) => arr.length));
}

function getOnes(grid) {
    const res = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                res.push([i, j]);
            }
        }
    }
    return res;
}

function makeAdjacentCoords(i, j, sizeI, sizeJ) {
    return [
        [i - 1, j - 1],
        [i, j - 1],
        [i + 1, j - 1],
        [i - 1, j],
        [i, j],
        [i + 1, j],
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j + 1]
    ].filter(([m, n]) => m >= 0 && n >= 0 && m < sizeI && n < sizeJ);
}

const grid = [
    [1, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
];

console.log(connectedCell(grid));

