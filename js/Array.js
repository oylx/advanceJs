// 改变原数组的API:
// push()，pop(),
// shift()，unshift(),
// reverse(),
// splice()


// 1.构造函数
// Array是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。
var arr = new Array(2);// 等同于
var arr = Array(2);
arr.length // 2
arr // [ empty x 2 ]
// Array构造函数有一个很大的缺陷，就是不同的参数，会导致它的行为不一致
// 因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。
var arr = new Array(1, 2);// bad
var arr = [1, 2];// good

const obj = { a: 2 };

// 2.valueOf()，toString()
// valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。
// toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式
var arr = [1, 2, 3, [4, 5, 6]];
console.log(arr.valueOf()); // [1, 2, 3]
console.log(arr.toString());

// 3.push()，pop(),会改变原数组
// push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
// pop方法用于删除数组的最后一个元素，并返回该元素。

// 4.shift()，unshift(),会改变原数组
// shift方法用于删除数组的第一个元素，并返回该元素。
// unshift方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
// push和shift结合使用，就构成了“先进先出”的队列结构（queue）。

// 5.join()
// join方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。

// 6.concat()
// concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变

// 7.reverse(),会改变原数组
// reverse方法用于颠倒排列数组元素，返回改变后的数组。

// 8.slice()
// slice方法用于提取目标数组的一部分，返回一个新数组。
// slice方法的一个重要应用，是将类似数组的对象转为真正的数组
// Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })

// 9.splice(),会改变原数组
// splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。
// splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

// 10.sort(),会改变原数组
// sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变
// sort方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。
([11, 101]).sort();// [101, 11]
([10111, 1101, 111]).sort((a, b) => a - b)

// 11.map()
// map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回
// map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。
// map方法还可以接受第二个参数，用来绑定回调函数内部的this变量
var arr = ['a', 'b', 'c'];

console.log([1, 2].map(function (e) {
  return this[e];
}, arr));

// 如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位
var f = function (n) { return 'a' };
([1, undefined, 2]).map(f); // ["a", "a", "a"]
([1, null, 2]).map(f); // ["a", "a", "a"]
([1, , 2]).map(f); // ["a", , "a"]

// 12.forEach()
// forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。
// forEach方法也可以接受第二个参数，绑定参数函数的this变量
// forEach方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环。
// forEach方法也会跳过数组的空位

var arr = [1, 2, 3];
arr.forEach(v => {
  if (v === 2) return;
  console.log(v);
});

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === 2) break;
//   console.log(arr[i]);
// }

// 13.filter()
// filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
// 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。
// filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量。
([1, 2, 3, 4, 5]).filter((elem, index, arr) => index % 2 === 0);// [1, 3, 5]

// 14.some()，every()
// 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

// 15.reduce()，reduceRight()
// reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。
// reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数，只有前两个是必须的。
// 累积变量，默认为数组的第一个成员， 它放在reduce方法和reduceRight方法的第二个参数
// 当前变量，默认为数组的第二个成员
// 当前位置（从0开始）
// 原数组
let res = [1, 2, 3, 4, 5].reduce(function (a, b) {
  return a - b;
});
console.log(res);
function substract (prev, cur) {
  return prev - cur;
}

[3, 2, 1].reduce(substract); // 0
[3, 2, 1].reduceRight(substract); // -4

// 16.indexOf()，lastIndexOf()
// indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1
// 还可以接受第二个参数，表示搜索的开始位置
// 这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN，因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值
var users = [
  { name: 'tom', email: 'tom@example.com' },
  { name: 'peter', email: 'peter@example.com' }
];
var res1 = users.map(user => user.email).filter(email => /^t/.test(email));
console.log(res1);

































