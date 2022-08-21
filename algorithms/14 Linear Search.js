/*

linear / binary

Master theorm

*/

function linearSearch(array , el) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === el) {
            return index
        }
    }
}
console.log(linearSearch([1, 2, 3, 4, 5], 5));


/*

O(n)

*/  