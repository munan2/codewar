function quickSort (arr) {
    let length = arr.length;
    if (length <= 1) {
        return arr
    }
    let middleIndex = Math.floor(length/2)
    let temp = arr[middleIndex]
    let leftArr = []
    let rightArr = []
    for (let i=0; i<length; i++) {
        if (i !== middleIndex) {
            if (arr[i] < temp) {
                leftArr.push(arr[i])
            } else {
                rightArr.push(arr[i])
            }
        }
    }
    return quickSort(leftArr).concat([temp], quickSort(rightArr))
}
console.log(quickSort([5,3,7,4,4,0,9,1]))
