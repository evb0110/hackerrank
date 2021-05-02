function climbingLeaderboard(scores, alice) {
    const ranks = assignRanks(scores);
    return alice.map(elem => getRank(ranks, elem));
}

function assignRanks(scores) {
    const uniqObj = {};
    const uniqArr = [];
    let counter = 1;
    for (const score of scores) {
        if (!uniqObj[score]) {
            uniqArr.push([score, counter++]);
            uniqObj[score] = true;
        }
    }
    return uniqArr;
}

function getRank(ranks, num) {
    // Если больше или равен самому первому, то его ранг
    const firstRank = ranks[0];
    if (num >= firstRank[0]) {
        return firstRank[1];
    }
    // Если меньше самого последнего, то его ранг + 1
    const lastRank = ranks[ranks.length - 1];
    if (num < lastRank[0]) {
        return lastRank[1] + 1;
    }

    // Метод деления отрезка пополам
    let leftPointer = 0;
    let rightPointer = ranks.length - 1;
    while (leftPointer <= rightPointer) {
        let mediumPointer = Math.round((rightPointer + leftPointer) / 2);
        const currentRank = ranks[mediumPointer];
        const previousRank = ranks[mediumPointer - 1];
        if (num >= currentRank[0] && num < previousRank[0]) {
            return currentRank[1];
        } else if (num < currentRank[0]) {
            leftPointer = mediumPointer + 1;
        } else {
            rightPointer = mediumPointer - 1;
        }
    }
}


console.log(
    climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
)
