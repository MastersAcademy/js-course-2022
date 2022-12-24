const buildXmasTree = (height) => {
    const branchLength = height - 1;
    // just to avoid use for loop;
    const mockArrayForTreeIteration = [...new Array(height)];
    const mockArrayForBranchIteration = [...new Array(branchLength)];
    mockArrayForTreeIteration.forEach((_, index) => {
        const branch = mockArrayForBranchIteration.map((__, i) => {
            const edge = height - index;
            const line = i + 1;
            if (line === edge) {
                if (line % 2) {
                    return '*';
                }
                return '@';
            }
            if (line < edge) {
                return ' ';
            }
            return '*';
        });
        console.log(`${branch.join('')}*${branch.reverse().join('')}`);
    });
};

buildXmasTree(15);

const firstArray = [
    [1, 4, 2, 4, 4, 2, 4, 3, 2, 6, 2, 4, 2, 4, 3, 1, 2, 4, 3],
    [1, 1, 3, 1, 1, 3, 3, 1, 6, 6, 8, 3, 3, 3, 3, 1, 4, 1, 2],
    [1, 2, 1, 4, 1, 1, 4, 7, 8, 8, 7, 7, 1, 1, 4, 3, 1, 1, 2],
    [3, 2, 3, 3, 4, 2, 7, 8, 6, 8, 6, 7, 8, 1, 2, 3, 3, 3, 4],
    [4, 1, 3, 3, 2, 8, 7, 8, 6, 7, 6, 7, 6, 7, 2, 4, 3, 2, 2],
    [3, 1, 2, 1, 7, 7, 8, 8, 8, 7, 6, 8, 8, 6, 8, 4, 1, 3, 2],
    [2, 1, 1, 7, 6, 7, 7, 8, 7, 6, 8, 6, 6, 6, 6, 8, 4, 4, 3],
    [4, 1, 6, 7, 8, 7, 8, 8, 6, 6, 7, 7, 6, 6, 6, 7, 6, 1, 2],
    [1, 6, 6, 6, 6, 8, 8, 7, 6, 6, 7, 8, 7, 8, 8, 7, 6, 7, 1],
    [8, 6, 8, 6, 6, 7, 7, 6, 6, 7, 8, 7, 6, 6, 6, 6, 7, 8, 7],
];

const transformArray = (acc, num) => {
    if (num < 5) {
        return `${acc} `;
    }
    return `${acc}*`;
};

const transform2DemArrayTo1Dem = (arr) => arr.map((line) => line.reduce(transformArray, ''));

console.log(transform2DemArrayTo1Dem(firstArray));
