class Point {
    constructor(i, j, matrix) {
        if (!(i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length && matrix[i][j] !== 'X')) {
            this.invalid = true;
            return;
        }
        this.i = i;
        this.j = j;
        this.matrix = matrix;
        this.value = matrix[i][j];
    }

    isSame(other) {
        return this.i === other.i && this.j === other.j;
    }

    get adjacentPoints() {
        return [
            new Point(this.i - 1, this.j, this.matrix),
            new Point(this.i, this.j - 1, this.matrix),
            new Point(this.i + 1, this.j, this.matrix),
            new Point(this.i, this.j + 1, this.matrix),
        ].filter(point => !point.invalid);
    }
}

function countLuck(matrix, k) {
    const impressed = 'Impressed';
    const oops = 'Oops!';

    const routes = [];
    let isFinished = false;

    let start;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 'M') {
                start = new Point(i, j, matrix);
            }
        }
    }
    go([], start);
    const trueRoute = routes.find((route) => route[route.length - 1].value === '*');
    const turns = (trueRoute[0].adjacentPoints.length >= 2 ? 1 : 0) +
        trueRoute.slice(1, trueRoute.length - 1).filter((point) => point.adjacentPoints.length > 2).length
    return turns === k ? impressed : oops;


    function go(route, point) {
        if (point.value === '*' || isFinished) {
            isFinished = true;
            routes.push([...route, point]);
            return;
        }
        const adjacentPoints = point.adjacentPoints;
        for (const adjacentPoint of adjacentPoints) {
            if ((route.length && !adjacentPoint.isSame(route[route.length - 1])) || route.length === 0) {
                go([...route, point], adjacentPoint);
            }
        }
    }
}

const matrix = [
    '*.M',
    '.X.',
];
const k = 1;

console.log(
    countLuck(matrix, k)
)

