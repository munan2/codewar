//var lst = [ [1, 2], [1, 3], [1, 4]]求的分母最小公倍数，且改变返回的形式
//Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")
//我的思想：
//1. 遍历传入的数组，找到每个分母构成一个新数组newArr，并找到其中最大的数max，其知道最小公倍数一定小于每个分母相乘的值maxNum
//2. 我们可以知道我们求的最小公倍数t肯定大于等于max,小于等于maxNum，在这个范围内循环，对newArr里的每个数与max取余数，如果不为0,max+1
//3. 这里注意跳出循环的条件，我们新建了一个长度和newArr相等的空数组，当数组中每一个值都为1，说明这三个都可以整数，那么结束循环
function convertFrac(lst){
    if (lst.length == 1) {
        return "(" + lst[0][0] + ',' + lst[0][1] + ')'
    } else {
        let maxNum = 1
        let newArr = []
        lst.forEach((value, index, arr) => {
            newArr.push(value[1])
            maxNum *= value[1]
        })
        newArr.sort(function (a, b) {
            return b-a
        })
        let max = newArr[0]
        var arr2 = new Array(lst.length);
        var k = 1
        for (var j = max; j<=maxNum; j++) {
            k = 1
            newArr.forEach((value, index, arr) => {
                if ((max % arr[index]) > 0 ) {
                    max++
                    arr2[index] = 0
                } else {
                    arr2[index] = 1  
                }
                k = k * arr2[index]
            })
            if (k==1) {
                for (var j=0; j<lst.length; j++) {
                    lst[j][0] = max/lst[j][1] * lst[j][0]
                    lst[j][1] = max
                    result += '(' + lst[j][0] + ',' + max +')'
                }
                return result
            }
        } 
    }
  }
  console.log(convertFrac([[1,2]]))
  console.log(convertFrac([[1,7], [1,5], [2, 14]]))
  console.log(convertFrac([[1,2],[1,3],[2,18]]))