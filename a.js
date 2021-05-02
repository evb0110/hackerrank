function missingNumbers(arr, brr) {
    const histA = makeHistogram(arr);
    const histB = makeHistogram(brr);
    return Object.entries(histB).map(([key, value]) => {
        return [key, Math.max(value - (histA[key] || 0))];
    })
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .sort((a, b) => a - b);
}

function makeHistogram(arr) {
    const hist = {};
    for (const elem of arr) {
        hist[elem] = hist[elem] || 0;
        hist[elem]++;
    }
    return hist;
}

const arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14]

const brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]

console.log(
    missingNumbers(arr, brr)
)