function pickingNumbers(arr) {
    const restrictingArrays = makeArrays(discreteNumbers(arr));
    const arrays = [];
    for (const restrictingArray of restrictingArrays) {
        console.log(restrictingArray)
        const array = [];
        for (const elem of arr) {
            if (restrictingArray.includes(elem)) {
                array.push(elem);
            }
        }
        arrays.push(array);
    }

    let maxLength = 0;
    for (const array of arrays) {
        if (array.length > maxLength) {
            maxLength = array.length;
        }
    }
    return maxLength;
}


function discreteNumbers(arr) {
    const obj = {};
    for (const elem of arr) {
        if (obj[elem] === undefined) {
            obj[elem] = 1;
        }
    }
    return Object.keys(obj).sort(function numberCompare(a, b) { return a - b });
}

function makeArrays(discreteNumbersArr) {
    discreteNumbersArr[discreteNumbersArr.length] = discreteNumbersArr[discreteNumbersArr.length - 1];
    const result = [];
    for (let i = 0; i < discreteNumbersArr.length - 1; i++) {
        const current = +discreteNumbersArr[i];
        const next = +discreteNumbersArr[i + 1];
        if (next - current === 1) {
            result.push([current, next]);
        } else {
            result.push([current]);
        }
    }
    return result;
}



console.log(
    pickingNumbers([1,1,1,1001,1001, 1001])
)
