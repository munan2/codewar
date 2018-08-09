function multiply(a, b)
{
    let arr1 = arguments[0].split('')
    let arr2 = arguments[1].split('')
    let newArr = []
    let result = (parseInt(arguments[0]) * parseInt(arguments[1])).toString().replace(/^[\s|0]+([0-9])/, '$1')
    if (/e\+/.test(result) || result == Infinity) {
        for (let k = arr1.length-1; k >= 0; k--) {
            newArr[k] = []
            let x = 0
            for (let i = arr2.length-1; i>=0; i--) {
                let t = x + (arr2[i] * arr1[k])
                x = Math.floor(t / 10)
                t = t >= 10 && i!==0 ? t % 10 : t
                if (t >= 10 && i === 0) {
                    newArr[k].unshift(x, t%10)
                } else {
                    newArr[k].unshift(t)
                }
            }
            pushZero(arr1.length-k-1, newArr[k])
        }
        let data = 0
        let arr = newArr[0]
        let result = []
        for (let j=1; j<newArr.length; j++) {
            let y = 0
            for (let i=arr.length-1; i>=0; i--) {
                let dis = arr.length-newArr[j].length
                newArr[j] = pushZero(dis, newArr[j], 1)
                arr[i] = newArr[j][i] + arr[i] + y
                y = Math.floor(arr[i]/10)
                arr[i] = arr[i] >= 10 && i!==0 ? arr[i]%10 : arr[i]
                if (arr[i]>= 10 && i === 0) {
                    result.unshift(y, arr[i]%10)
                } else {
                    result.unshift(arr[i])
                }
            }
            arr = result;
            result = []
        }
        result = arr.join('').replace(/^0+([0-9])/, '$1')
        return result
    } 
    return result 
}

function pushZero (a, arr, k) {
    for (let i=0; i<a; i++) {
        if (k) {
            arr.unshift(0)
        } else {
            arr.push(0)
        }
    }
    return arr
}
// console.log(multiply("0013", "01"))
// console.log(multiply("188", "88"))
// console.log(multiply("98765432", "999999"))
console.log(multiply("1020303004875647366210102030300487564736621010203030048756473662101020303004875647366210", "277000000004736320203030048756473662101020303004875647366210102030302030300487564736621010203030048756402030300487564736621010203030048756473662101020303020303004875647366210102030300487564736621010203030203030048756473662101020303004875647366210102030302030300487564736621010203030048756473662101020303020303004875647366210102030300487564736621010203037366210102030302030300487564736621010203030048756473662101020303627613"))