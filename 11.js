//两个升序排序的数组合并，将两个数组合并，仍然升序排列。时间复杂度为n
function mergeArr(arr1, arr2) {
    var indx1 = 0;
    var indx2 = 0;
    var newArr = [];
    while(indx1 <= arr1.length && indx2 <= arr2.length) {
        if (arr1[indx1] < arr2[indx2]) {
            newArr.push(arr1[indx1])
            indx1++
        } else {
            newArr.push(arr2[indx2])
            indx2++
        }
        if (indx1 == arr1.length) {
            newArr = newArr.concat(arr2.slice(indx2, arr2.length))
            break;            
        }
        if (indx2 == arr2.length) {
            newArr = newArr.concat(arr1.slice(indx1, arr1.length))
            break;
        }
    }
    // if (indx1 < arr1.length) {
    //     newArr = newArr.concat(arr1.slice(indx1, arr1.length))
    // }
    // if (indx2 < arr2.length) {
    //     newArr = newArr.concat(arr2.slice(indx2, arr2.length))
    // }
    return newArr
}
console.log(mergeArr([11,23,27,34], [0,7,20,23,29,31,74]))