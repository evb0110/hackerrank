function map(arr, cb) {
    const result = [];
    for (const el of arr) {
        result.push(cb(el));
    }
    return result;
}

arr = [1, 2, 3];

console.log(
    map(arr, (el) => el * el)
)
