// 1.新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。另一种是使用RegExp构造函数。
var regex = /xyz/;
var regex = new RegExp('xyz');
var regex = /xyz/i;
var regex = new RegExp('xyz', 'i');

// 2.实例属性，正则对象的实例属性分成两类。
// 2.1一类是修饰符相关，返回一个布尔值，表示对应的修饰符是否设置。
/*
RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。
RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。
RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。
*/
var r = /abc/igm;
r.ignoreCase // true
r.global // true
r.multiline // true
// 2.2另一类是与修饰符无关的属性，主要是下面两个。
/*
RegExp.prototype.lastIndex：返回一个数值，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义，详细介绍请看后文。
RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。
*/
var r = /abc/igm;
r.lastIndex // 0
r.source // "abc"

// 3实例方法
// 3.1RegExp.prototype.test()，正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
var r = /x/g;
var s = '_x_x';

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false

// 3.2RegExp.prototype.exec(),正则实例对象的exec方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。

var s = '_x_x';
var r1 = /x/g;
var r2 = /y/;

var res1 = r1.exec(s) // ["x"]
var res2 = r2.exec(s) // null

/**
 * 利用g修饰符允许多次匹配的特点，可以用一个循环完成全部匹配
 */
function fn () {
  // 只要exec方法不返回null，就会一直循环下去，每次输出匹配的位置和匹配的文本
  var reg = /a/g;
  var str = 'abc_abc_abc'

  while (true) {
    const match = reg.exec(str);
    if (!match) break;
    console.log('#' + match.index + ':' + match[0]);
  }
  // #0:a
  // #4:a
  // #8:a
}

// 4.1String.prototype.match()，字符串实例对象的match方法对字符串进行正则匹配，返回匹配结果。
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

s.match(r1) // ["x"]
s.match(r2) // null

// 4.2String.prototype.search()
// 字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1
'_x_x'.search(/x/)// 1

// 4.3String.prototype.replace()，字符串对象的replace方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容，第二个参数可以使用美元符号$，用来指代所替换的内容。
/*
$&：匹配的子字符串。
$`：匹配结果前面的文本。
$’：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$
*/
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')// "world hello"

// 4.4String.prototype.split()，字符串对象的split方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。




























