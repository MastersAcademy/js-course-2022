/* Task 1 - Christmas Tree */

function makeTree(height) {
    let tree = [];
    let width = height * 2 - 1;
    let treeTemp = [width]
    const midIndex = parseInt(((width) / 2), 10);
    let rightIndex = midIndex;
    let leftIndex = midIndex;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === height - 1) {
                treeTemp[j] = '*';
            } else if ((j >= leftIndex && j <= rightIndex) || j === midIndex) {
                treeTemp[j] = '*';
            } else {
                treeTemp[j] = ' ';
            }
        }
        leftIndex--;
        rightIndex++;
        tree.push(treeTemp);
        treeTemp = [width];
    }
    return tree
}

function drawTree(tree) {

    let str = '';
    for (let i = 0; i < tree.length; i++){
        let treeTemp = tree[i];
        for (let j = 0; j < tree[i].length; j++){
            str += treeTemp[j].toString();
        }
        console.log(str);
        str = '';
    }
}

let treeHeight = 15;
let christmasTree = makeTree(treeHeight);
drawTree(christmasTree);
