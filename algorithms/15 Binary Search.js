/*
    List needed to be sorted
*/


function binarySearch(arr=[], el=0) {
    let startIndex = 0
    let endIndex = arr.length -1
    while (startIndex <= endIndex) {
        let mid = startIndex + Math.floor((endIndex - startIndex) / 2)
        if (el === arr[mid]) return mid
        
        if (arr[mid] < el) {
            startIndex = mid + 1 
        } else {
            endIndex = mid -1
        }
    }
}
 
console.log(binarySearch([1, 5, 9, 13, 99, 100], 99));



// O(log n)
// Cuz we are discarding the half of the value every time