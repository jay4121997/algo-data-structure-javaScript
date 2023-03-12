function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1],arr[0]] : arr
    }

    const mid = Math.floor(arr.length/2)
    const leftArray = arr.slice(0, mid)
    const rightArray = arr.slice(mid)

    const leftSortedArray = mergeSort(leftArray)
    const rightSortedArray = mergeSort(rightArray)

    const mergedArr = []
    let leftIndex = 0
    let rightIndex = 0
    
    while (
        leftIndex < leftSortedArray.length ||
        rightIndex < rightSortedArray.length
    ) {
        if (
            leftIndex >= leftSortedArray.length ||
            leftSortedArray[leftIndex] > rightSortedArray[rightIndex]
        ) {
            mergedArr.push(rightSortedArray[rightIndex])
            rightIndex++
        } else {
            mergedArr.push(leftSortedArray[leftIndex])
            leftIndex++
        }
    }
    return mergedArr
}

console.log(mergeSort([2, 6, 8,1, 7 , 9]));

/*

O(nlogn)

*/

// 2, 6, 8      1, 7 , 9