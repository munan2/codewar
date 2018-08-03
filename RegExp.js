//获取图像src
let url = "url(http://www.baidu.com/01.png)"
let reg = /url\(([^\)]+)\)$/
console.log(url.replace(reg, '$1'))

//email
let reg2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+/
// console.log(reg2.test('18845724607@163.com'))
// console.log(reg2.test('1163454762@qq.com'))
// console.log(reg2.test('1884572460@163.com'))
// console.log(reg2.test('aa1884572460@163.com'))

//url验证
let reg3 = /[a-z]+:\/\/[a-z]+/
console.log(reg3.test('http://aa.com'))

//去掉前后空格
let reg4 = /^\s+|\s+$/
console.log(' hahaha '.replace(reg4, ''))