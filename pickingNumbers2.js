function pickingNumbers(arr) {
    const dn = distinctNumbers(arr); // { 1: 1, 2: 1, 3: 1 }
    const keys = Object.keys(dn);  // [1, 2, 4]
    const da = distinctArrays(keys); // [[1, 2], [4]]
    const subarrays = getSubarrays(arr, da);
    return getMaxLengthArray(subarrays);
}

function distinctNumbers(arr) {
    const obj = {};
    for (const elem of arr) {
        obj[elem] = 1;
    }
    return obj;
}

function distinctArrays(arr) {
    const last = arr[arr.length - 1];
    arr = [...arr, last];
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        const localArray = [];
        const current = +arr[i];
        const next = +arr[i + 1];
        localArray.push(current);
        if (next - current === 1) {
            localArray.push(next);
        }
        result.push(localArray);
    }
    return result;
}

function getSubarrays(arr, criterionArray) {
    const result = [];
    for (const criterion of criterionArray) {
        const subarray = [];
        for (const elem of arr) {
            if (criterion.includes(elem)) {
                subarray.push(elem);
            }
        }
        result.push(subarray)
    }
    return result;
}

function getMaxLengthArray(arrays) {
    let maxLength = -Infinity;
    for (const array of arrays) {
        if (array.length > maxLength) {
            maxLength = array.length;
        }
    }
    return maxLength;
}

console.log(
    pickingNumbers([1,1,1,1001,1001, 1001])
)
