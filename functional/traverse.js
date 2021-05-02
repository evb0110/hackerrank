function traverse(obj, cb) {
    const pairs = Object.entries(obj);
    for (const [key, value] of pairs) {
        cb(key);
        if (typeof value !== 'object') {
            cb(value);
        } else {
            traverse(value, cb);
        }
    }

}

var obj = {
    a: {
        n: {
            m: {
                k: 1
            }
        }
    },
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            h: 5,
            g: {
                k: 7
            }
        }
    }
}

traverse(obj, (el) => console.log('element', el));

// depth-first traversal
