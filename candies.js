function candies(n, arr) {
    const result = [];
    const minIdxs = arr.map((_, idx) => isMin(idx, arr));
    const maxIdxs = arr.map((_, idx) => isMax(idx, arr));
    minIdxs.forEach((idx) => result[idx] = 1);

}

function isMin(i, arr) {
    return arr[i] = Math.min(arr[i - 1] || Infinity, arr[i], arr[i + 1]);
}
function isMax(i, arr) {
    return arr[i] = Math.max(arr[i - 1], arr[i], arr[i + 1] || -Infinity);
}
