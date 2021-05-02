function forEach(arr, cb) {
    for (const el of arr) {
        cb(el);
    }
}

const arr = [1,2,3];

forEach(arr, (x) => console.log('element is', x));
