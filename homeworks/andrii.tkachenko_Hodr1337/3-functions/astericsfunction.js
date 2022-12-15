/*
I thought that the task with an asterisk would be about this, it became a pity to delete it)

function randomItem(items)
{

return items[Math.floor(Math.random()*items.length)];

}

const items = [254, 45, 212, 365, 2543];
console.log(randomItem(items));
*/

function recursion(x, n) {
    if (n === 1) {
        return x;
    }
    return x * recursion(x, n - 1);
}
console.log(recursion(5, 3));
