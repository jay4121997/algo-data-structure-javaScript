const minInArray = arr => {
    let min = arr[0]
    for (let i of arr) {
        if (i < min) {
            min = i
        }
    }
    return min
}
minInArray([9,4,5,2,-2,2,3,4,5,6,7,8,9])