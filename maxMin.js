const maxMin = (k, arr) => arr.sort((a, b) => a - b).slice(0, arr.length - k + 1).reduce((acc, el, i) => Math.min(arr[i + k - 1] - arr[i], acc), Infinity);
