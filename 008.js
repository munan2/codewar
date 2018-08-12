//插入排序
function add (arr) {
    var temp;
    for (var i=1; i<arr.length; i++) {
        temp = arr[i]
        prevIndex = i-1;
        while(temp < arr[prevIndex] && prevIndex>=0) {
            arr[prevIndex+1] = arr[prevIndex]
            prevIndex--
        }
        arr[prevIndex+1] = temp
    }
    return arr;
}
console.log(add([5,2,7,3,6]))