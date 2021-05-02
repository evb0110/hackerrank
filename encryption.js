function encryption(s) {
    const chunkLength = Math.ceil(s.length ** 0.5);
    const chunks = makeChunks(s, chunkLength);
    const encrypt = [];
    for (let i = 0; i < chunkLength; i++) {
        const word = chunks.map((chunk) => chunk[i] || '').join('');
        encrypt.push(word);
    }
    return encrypt.join(' ');
}

function makeChunks(str, chunkLength) {
    const chunks = [];
    const numberOfChunks = Math.ceil(str.length / chunkLength);
    for (let i = 0; i < numberOfChunks; i++) {
        chunks[i] = str.slice(i * chunkLength, Math.min(str.length, (i + 1) * chunkLength));
    }
    return chunks;
}

console.log(
    encryption('feedthedog')
)
