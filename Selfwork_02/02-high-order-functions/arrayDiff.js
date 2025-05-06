/* ex. arrayDiff([], [4,5]) => [] arrayDiff([3,4], [3]) => [4] arrayDiff([1,8,2], []) => [1, 8, 2] */

let arrayDiff = (a, b) => {

    return a.filter( e => !b.includes(e));
}

console.log(arrayDiff([1,2,3], [2,3]));
