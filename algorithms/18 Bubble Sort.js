function bubbleSort(arr) {
    let res = [...arr];
    for (let outer = 0; outer < res.length; outer++) {
        let outerEl = res[outer];
        for (let inner = outer + 1; inner < res.length; inner++) {
            let innerEl = res[inner];

            if (outerEl > innerEl) {
                res[outer] = innerEl;
                res[inner] = outerEl;

                innerEl = res[inner];
                outerEl = res[outer];
            }
        }
    }
    return res;
}

console.log(bubbleSort([1, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2, 2, 3, 4, 4, 6, 75, 4, 5, 67, 67, 4534, 563, 5, 674545, 67, 455, 74, 2]));

/*

O(n^2) => Quadratic

*/