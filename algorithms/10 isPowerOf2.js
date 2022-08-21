const isPowOf2 = number => {
    if (number < 1) return false
    let dividedNum = number
    while (dividedNum !== 1) {
        if (dividedNum % 2 !== 0) return false
        dividedNum= dividedNum/2
    }
    return true


    //bitwise solution
    // comparing btowise pairs as each 2^n will have 0 at the end so number & number should give 0 always
    
    // return (number & number-1) === 0
    // O(1)
}

// O(log n)

// Cuz for big numbers loops run time will not be linearly long




