//Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression
//做一个简易计算器
evaluate = string => {
  let newString
  if (string.match(' ')) {
    newString = string.split(' ');
    let dataArr = []
    let stringArr = []
    for (var i=0; i<newString.length; i++) {
      let newValue = parseInt(newString[i]);
      if (newString[i] !== '*' && newString[i] !== '/') {
        if (isNaN(newValue)) {
          stringArr.push(newString[i])
        } else {
          dataArr.push(newValue)
        }
      } else if (newString[i] === '*') {
        let newData = dataArr.pop() * newString[i+1]
        dataArr.push(newData)
        i++
      } else if (newString[i] === '/') {
        let newData = dataArr.pop() / newString[i+1]
        dataArr.push(newData)
        i++
      }
    }
    stringArr.forEach((value, index, arr) => {
      if (value === '+') {
        let newData = dataArr[0] + dataArr[1];
        dataArr.splice(0, 2, newData)
      }
      if (value === '-') {
        let newData = dataArr[0] - dataArr[1];
        dataArr.splice(0, 2, newData)
      }    
    })
    newString = dataArr[0]
  } else {
    newString = string.replace('\'', '')
  }
  return newString
}
console.log(evaluate('1 + 2 * 3 + 2 / 1'))
