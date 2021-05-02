function encryption(s) {
    const rowLength = Math.ceil(s.length ** 0.5);
    const columnLength = Math.floor(s.length ** 0.5);
    const result = [];
    for (let i = 0; i < rowLength; i++) {
        const subres = [];
        for (let j = 0; j <= columnLength; j++) {
            const el = j * rowLength + i
            subres.push(s[el]);
        }
        result.push(subres);
    }
    return result.map((subres) => subres.join('')).join(' ')
}

console.log(
    encryption('chillout')
)
