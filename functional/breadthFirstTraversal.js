function traverse(obj, cb) {
    const queue = [];
    queue.push(obj);

    while (queue.length) {
        const subObj = queue.shift();
        const entries = Object.entries(subObj);
        entries.forEach(([key, value]) => {
            cb(key);
            if (typeof value !== 'object') {
                cb(value);
            } else (queue.push(value));
        });
    }
}


const obj = {
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

traverse(obj, console.log);
