const INITIAL_HEIGHT = 1;
const Season = {
    spring: 'Spring',
    summer: 'Summer',
}

function growRecursively(currentHeight, season, n) {
    if (n === 0) {
        return currentHeight;
    }
    if (season === Season.summer) {
        return growRecursively(currentHeight + 1, Season.spring, n - 1);
    } else if (season === Season.spring) {
        return growRecursively(currentHeight * 2, Season.summer, n - 1);
    }
}

function grow(n) {
    return growRecursively(INITIAL_HEIGHT, Season.spring, n);
}

console.log(
    grow(5)
)
