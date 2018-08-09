//求得一个字符串按照ascii值任意排序中，最中间的排序
function middlePermutation(s) {
  let length = s.length
  let newArr = s.split('')
  newArr.sort(function (a,b) {return a.charCodeAt(0) - b.charCodeAt(0)})
  if (length > 2) {
    let t = Math.floor(length / 2)
    if (length % 2 === 0) {
      let newData1 = [newArr[t-1]]
      newArr.splice(t-1, 1)
      let newArr2 = newArr.sort(function (a, b) {return b.charCodeAt(0) - a.charCodeAt(0)})
      return newData1.concat(newArr2).join('')
    } else {
      let newData2 = [newArr[t]]
      newArr.splice(t, 1)
      let length2 = newArr.length
      if (length2 > 3) {
        newArr2 = middlePermutation(newArr.join(''))
      } else {
        newArr2 = newArr.sort(function (a, b) {return a.charCodeAt(0) - b.charCodeAt(0)})
      }
      return newData2.concat(newArr2).join('')
    }
  } else {
    return newArr.join('')
  }
}
console.log(middlePermutation('abc'))
console.log(middlePermutation('abcd'))
console.log(middlePermutation('obcxd'))
  // console.log(middlePermutation("sxiowlfheuctqkjvnmadrgypzb"))
  // console.log(middlePermutation("fp"))