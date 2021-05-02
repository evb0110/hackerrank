function biggerIsGreater(word) {
    const NO_ANSWER = 'no answer';
    if (word.length === 0) {
        return '';
    }
    const letters = word.split('');
    let swappedIndex;
    for (let i = letters.length - 2; i >= 0; i--) {
        const idx = indexToSwap(word, i, word.length - 1);
        if (idx !== undefined) {
            swappedIndex = i;
            [letters[i], letters[idx]] = [letters[idx], letters[i]]
            break;
        }
    }
    if (swappedIndex === undefined) {
        return NO_ANSWER;
    }

    return letters.slice(0, swappedIndex + 1).join('') +
        letters.slice(swappedIndex + 1).sort((a, b) => Number(a > b) - 1).join('');
}

function indexToSwap(word, i, j) {
    const criterion = word[i];
    let minimal = word[i + 1];
    let index;
    for (let k = i + 1; k <= j; k++) {
        if (word[k] <= minimal && word[k] > criterion) {
            minimal = word[k];
            index = k;
        }
    }
    return index;
}

console.log(
    biggerIsGreater('ehxxdsuhoowxpbxiwxjrhe')
)
