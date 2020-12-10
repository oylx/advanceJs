// 1.String.prototype.charAt()
// charAt方法返回指定位置的字符，参数是从0开始编号的位置

// 2.String.prototype.concat()
// concat方法用于连接两个字符串，返回一个新字符串

// 3.String.prototype.concat()
// concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
one + two + three // "33"

// 4.String.prototype.slice()
// slice方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

// 5.String.prototype.substring()
// substring方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）
// 如果第一个参数大于第二个参数，substring方法会自动更换两个参数的位置

// 6.String.prototype.substr()
// substr方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice和substring方法的作用相同。
// substr方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

// 7.String.prototype.indexOf()，String.prototype.lastIndexOf()
// indexOf方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回 - 1，就表示不匹配。
// lastIndexOf方法的用法跟indexOf方法一致，主要的区别是lastIndexOf从尾部开始匹配，indexOf则是从头部开始匹配。

// 8.String.prototype.trim()
// trim方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。

// 9.String.prototype.toLowerCase()，String.prototype.toUpperCase()
// toLowerCase方法用于将一个字符串全部转为小写，toUpperCase则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

// 10.String.prototype.match()
// match方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null。

var a = ('cat, bat, sat, fat').match('at') // ["at"]
var b = ('cat, bat, sat, fat').match('xt') // null
console.log(a, b);

// 11.String.prototype.search()，String.prototype.replace()
// search方法的用法基本等同于match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。

// 12.String.prototype.split()
// split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

// 13.String.prototype.localeCompare()
// localeCompare方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。













































