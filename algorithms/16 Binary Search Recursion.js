/*
    List needed to be sorted
*/


// function binarySearch(arr = [], el = 0,offset=0) {
//     let start = 0
//     let end = arr.length
    
//     let mid = start + Math.floor((end - start) / 2)
    
//     if (arr[mid] === el) return mid + offset
    
//     if (arr[mid] < el) {
//         start = mid
//         offset = offset + mid
//     } else {
//         end = mid - 1
        
//     }
//     return binarySearch(arr.slice(start,end+1),el,offset)
// }

function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

    let midPoint = Math.floor(((stop-start)/2) + start)
  
    switch (true) {
      case arr[midPoint] === target:
        return midPoint
      case stop - start === 0:
        return false
      case arr[midPoint] < target:
        return binarySearch(arr, target, midPoint+1, stop)
      case arr[midPoint] > target:
        return binarySearch(arr, target, start, midPoint)
    }
  }
console.log(binarySearch([1, 5, 9, 13, 99, 100], 99,0));
