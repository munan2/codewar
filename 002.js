var moveZeros = function (arr) {
    let zeroArr = []
    let newArr = []
    arr.forEach((value, index, arr) => {
        if (value === 0) {
            zeroArr.push(0)
        } else {
            newArr.push(value)
        }
    })
    return newArr.concat(zeroArr)
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))