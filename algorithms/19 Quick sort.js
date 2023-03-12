function quickSort(arr) {
    const coppiedArr = [...arr]
    if (coppiedArr.length <= 1) return coppiedArr
    
    const smallElementArray = []
    const bigElementArray = []
    const pivot = coppiedArr.shift()
    const centeElementArray = [pivot]

    while (coppiedArr.length) {
        const current = coppiedArr.shift()

        if (current === pivot) {
            centeElementArray.push(current)
        } else if (current < pivot) {
            smallElementArray.push(current)
        } else {
            bigElementArray.push(current)
        }        
    }
    const smallSortedArray = quickSort(smallElementArray)
    const bigSortedArray = quickSort(bigElementArray)

    return smallSortedArray.concat(centeElementArray, bigSortedArray)
}

console.log(quickSort([1, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545]));

/*

O(n^2) => Quadratic ==> WORST CASE
O(nlogn) => Log ==> BEST/AVG CASE

*/