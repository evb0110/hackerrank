function pairs(k, arr) {
    const existObj = {};
    arr.forEach((el) => existObj[el] = 1);
    return arr.reduce((acc, el) => el + k in existObj ? acc + 1 : acc, 0)
}

const arr = [1, 5, 3, 4, 2];
console.log(
    pairs(2, arr)
)