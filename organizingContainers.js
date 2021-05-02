function organizingContainers(container) {
    const sum = arr => arr.reduce((a, b) => a + b, 0);
    const containerCapacities = container.map(sum).sort((a, b) => a - b);

    const hist = {};
    container.forEach((row) => {
        row.forEach((num, type) => hist[type] = (hist[type] || 0) + num);
    })
    console.log(hist);
    const ballCapacities = Object.values(hist).sort((a, b) => a - b);
    const ok = containerCapacities.join('_') === ballCapacities.join('_');
    return ok ? 'Possible' : 'Impossible';
}

const container = [
    [1, 1],
    [1, 1],
]

console.log(organizingContainers(container))
