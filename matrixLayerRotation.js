function matrixRotation(matrix, r) {
    const matrixClone = matrix.map((row) => [...row]);
    extractLayers(matrix).forEach((layer) => {
        const values = layer.map(([i, j]) => matrix[i][j]);
        const rotatedValues = rotateArray(values, r);
        layer.forEach(([i, j], idx) => matrixClone[i][j] = rotatedValues[idx]);
    });
    matrixClone.forEach((row) => console.log(row.join(' ')));
}

function rotateArray(array, r) {
    const realR = r % array.length;
    const tail = array.slice(array.length - realR, array.length);
    const head = array.slice(0, array.length - realR);
    return [...tail, ...head];
}

function extractLayers(matrix) {
    const result = [];
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;
    const layerCount = Math.min(rowCount, columnCount) / 2;
    for (let m = 0; m < layerCount; m++) {
        const horizontal = { left: m, right: columnCount - m - 1 }; // horizontal range of the layer
        const vertical = { top: m, bottom: rowCount - m - 1 };      // vertical range of the layer

        const arr = [];
        for (let j = horizontal.right; j >= horizontal.left + 1; j--) {     // top <-
            arr.push([vertical.top, j]);
        }
        for (let i = vertical.top; i <= vertical.bottom; i++) {    // left going down
            arr.push([i, horizontal.left]);
        }
        for (let j = horizontal.left + 1; j <= horizontal.right - 1; j++) { // bottom ->
            arr.push([vertical.bottom, j]);
        }
        for (let i = vertical.bottom; i >= vertical.top + 1; i--) {    // right going up
            arr.push([i, horizontal.right])
        }
        result.push(arr);
    }
    return result;
}

const matrix = [
    [1, 2, 2, 2, 2, 3],
    [6, 1, 1, 1, 1, 1],
    [1, 1, 'a', 'b', 'c', 1],
    [1, 1, 1, 1, 1, 1],
]

matrixRotation(matrix, 1)
