function findMaxMin(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];
    let min = arr[0];

    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return { max, min };
}

const arr1 = [3, 1, 4, 1, 5, 9];
console.log(findMaxMin(arr1));