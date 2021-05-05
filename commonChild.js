function commonChild(x, y) {
    const m = x.length;
    const n = y.length;
    const c = [];
    for (let i = 0; i <= m; i++) {
        c[i] = [];
        c[i][0] = '';
    }
    for (let j = 1; j <= n; j++) {
        c[0][j] = '';
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= m; j++) {
            if (x[i - 1] === y[j - 1]) {
                c[i][j] = c[i - 1][j - 1] + x[i - 1];
            } else {
                c[i][j] = c[i][j - 1].length > c[i - 1][j].length ? c[i][j - 1] : c[i - 1][j];
            }
        }
    }
    return c[m][n].length;
}


console.log(
    commonChild('SHINCHAN', 'NOHARAAA'),
)
