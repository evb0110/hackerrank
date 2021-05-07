function findMedian(arr) {
    const kIdeal = Math.floor(arr.length / 2)
    return findKth(arr, kIdeal);

    function findKth(a, k) {
        if (a.length === 1) {
            return a[0];
        }
        const pivot = a[0];
        const lows = a.filter((el) => el < pivot);
        const highs = a.filter((el) => el > pivot);
        const pivots = a.filter((el) => el === pivot);

        if (k < lows.length) {
            return findKth(lows, k);
        } else if (k < lows.length + pivots.length) {
            return pivots[0];
        } else {
            return findKth(highs, k - lows.length - pivots.length);
        }
    }
}

const arr = [9,1,0,2,3,4,6,8,7,10,5];

console.log(
    findMedian(arr)
)
