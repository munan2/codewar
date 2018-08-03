推荐一个网站，检测你的正则很棒 [网站链接](http://tool.oschina.net/regex)
## 创建正则表达式的方法
1. 直接创建
```js
var pattern = /s$/
```
2. 使用RegExp()构造函数创建
```js
var pattren = new RegExp('s$')
```
## 正则特殊字符匹配含义
字符 | 匹配 
:-|:-|:-|
[..]|包含括号内的任意字符|
[^..]|不在括号里的任意字符|
\w|合法字符，包含数字字母以及_等，我看权威指南写的其等价于[a-zA-Z0-9]，但其实并不是，\w对_也合理
\W|等价非法字符
\s|空白符
\S|非空白符号
\d|等价[0-9]
\D|等价[^0-9]
## 贪婪重复字符语法
<font color="#f00">注意:以下这个列表匹配的重复字符是尽可能多的匹配</font>
字符|匹配
:-|:-|
{n,m}|最少n个，不能超过m个
{n,}|大于等于n次
{n}|n次
?|0个或者1个,说明该项是可有可没有
+|出现次数大于等于1次
*|出现次数0次或者多次
示例
```js
let a = 'hhhh'
a.match(/[h]+/)
//得出结果：hhhh
```
## 非贪婪重复字符语法
这个就相当于在贪婪重复字符的后三个后面加了个?号
字符|匹配
:-|:-|
??|0个或者1个，尽可能少的匹配
+?|1个或者多个，尽可能少的匹配
*?|0个或者多个，尽可能少的匹配
示例
```js
let a = 'hahahaha'
a.match(/[h]+?/)
//得出结果：["h","h","h","h"] 
```
## 选择、分组、引用
字符|匹配
:-|:-|
\||或
(...)|将括号内的字符看作一个单元，这个单元可通过*，+，？，|等符号进行修饰
(?:...)|只组合，但不记忆与该组相匹配的字符
\n|和第n个分组匹配的字符
## 锚字符
字符|匹配
:-|:-|
^|匹配字符串的开头
$|匹配字符串结尾
\b|匹配单词边界
\B|匹配非单词的边界
(?=p)|匹配的字符要与p匹配，但不能包括匹配p的那些字符
(?!p)|匹配的字符要不与p匹配
## 修饰符
字符|匹配
:-|:-|
g|全局
i|不分大小写
m|多行匹配
## String执行正则表达式模式匹配和检索替换操作的方法
### search()
其参数是正则表达式，如果不是正则表达式，首先通过new RegExp()转换为正则表达式，其返回的是第一个与之匹配的子串的起始位置，如果找不到返回的-1
```js
"Javacript".search(/script/) //4
```
### replace()
第一个参数是正则表达式用以匹配字符串，第二个参数是进行替换的字符串。默认只替换第一个匹配的子字符串，如果想全局替换，第一个参数加上/g修饰符
```js
'javascriptscript'.replace(/script/, 'haha')//"javahahascript"
'javascriptscript'.replace(/script/g, 'haha')//"javahahahaha"
```
有一个特殊的地方，如果在替换的字符中出现$加数字，那么replace()将用与指定的子表达式相匹配的文本来替换这个字符串
```js
let string2 = "'' '哈哈' 'this is' 'nono'"
let reg = /'([^']*)'/g
string2.replace(reg, "“$1”")//"“” “哈哈” “this is” “nono”"
var str = 'X98Y87Z65';
 var reg = /^X(\d+)Y(\d+)Z(\d+)$/;  // 三个数字部分加了小括号，表示子表达式
 reg.test(str);  // 此处使用exec()等其他正则表达式的匹配方法也可以
 console.log(RegExp.$1);  // 98
 console.log(RegExp.$2);  // 87
 console.log(RegExp.$3);  // 65
```
<font color="#f00">这里$1我觉得很重要</font>
### match()
参数是一个正则表达式，返回的是一个由匹配结果组成的数组，如果加了修饰符/g，则该数组的内容是所有满足条件的子字符串，如果没有加修饰符，只会检索第一个匹配的字符串，且返回的也是一个数组。如果没有找到匹配结果返回null
```js
let string3 = "1 and 2 and 3"
string3.match(/\d/g)//["1", "2", "3"]
string3.match(/\d/)//["1", index: 0, input: "1 and 2 and 3", groups: undefined]
```
### split()
将字符串拆分为一个子串组成的数组
## 正则表达式执行模式匹配的方法
### exec()
和String的match()方法很像，只是其参数是一个字符串，exec的正则表达式不管具不具有全局修饰符/g，它总是返回一个匹配结果。但是加上了/g后，其会将当前正则表达式对象的lastIndex属性设置为紧挨着匹配子串的字符位置，可以看下图
```js
let string1 = "Hello Hello Hello"
let reg2 = /Hello/
reg2.exec(string1)//["Hello", index: 0, input: "Hello Hello Hello", groups: undefined]
let reg = /Hello/g;
reg.exec(string1)//["Hello", index: 0, input: "Hello Hello Hello", groups: undefined]
```
![](https://raw.githubusercontent.com/munan2/JavaScriptBase/master/imgs/RegExp.png)
### test()
其参数也是字符串，其匹配后的结果为true或false

## 日常正则表达式
1. 获取背景图片的url
```js
let url = "url(http://www.baidu.com/01.png)"
let reg = /url\(([^\)]+)\)$/
console.log(url.replace(reg, '$1'))
```
2. url验证
```js
let reg3 = /[a-z]+:\/\/[a-z]+/
console.log(reg3.test('http://aa.com'))
```
3. email验证
```js
let reg2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+/
```
4. 去掉前后空格
```js
let reg4 = /^\s+|\s+$/
console.log(' hahaha '.replace(reg4, ''))
```