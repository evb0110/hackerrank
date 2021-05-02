function isValid(s) {
    const hist = {};
    [...s].forEach((letter) => hist[letter] = (hist[letter] || 0) + 1);
    const hist2 = {};
    Object.values(hist).forEach((el) => hist2[el] = (hist2[el] || 0) + 1);

    const keys = Object.keys(hist2).map(Number);
    if (keys.length === 1) { // All the same
        return 'YES';
    }
    if (keys.length > 2) {
        return 'NO';  // More than two counts
    }
    const min = Math.min(...keys);
    const max = Math.max(...keys);
    if (hist2[max] === 1 && max - min === 1) {
        return 'YES';
    }
    if (hist2[min] === 1) {
        return 'YES';
    }
    return 'NO';
}

console.log(
    isValid('aabbccddeefghi')
)

// 3, 3, 3, 3, 3, 3, 4
