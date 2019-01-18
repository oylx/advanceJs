// 数组的拓展

// 1.Array.from
// 实际应用中，无论是 DOM 操作返回的 NodeList 集合，函数内部的 arguments 对象，或者是 Set、Map、还是字符串（字符串也是类数组，具有 length 属性），都能被 Array.from 转为数组
// Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// Array.from 还支持传入第三个参数，用来绑定第二个参数（类似 map 函数）中的 this 指向。
var obj={0:'a',1:'b',2:'c',length:3};//arguments
// console.log([].slice.call(obj))
// console.log(Array.from(obj))

// let str = 'hello';
// let a1 = Array.from(str,x=>x.toUpperCase());
// let a2 = Array.from(str).map(x => x.toUpperCase());
// console.log(a1); // [ 'H', 'E', 'L', 'L', 'O' ]

//2. Array.of()
//Array.of 方法用于将一组值，转换为数组。弥补数组构造函数 Array() 
// console.log(Array.of(1, 2, 3));
// console.log(Array.of(3))
// console.log(Array(3))//[<3 empty items>]

// 3.copyWithin(修改原数组)
// 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖），返回修改后的数组。
// 其接受三个参数：
// target（必须）：从该位置开始替换数据
// start（可选）：从该位置开始读取数据，默认为 0，如果为负数，表示倒数
// end（可选）：从该位置前停止读取数据，默认等于数组长度，如果为负数，表示倒数
// let a = [1, 2, 3, 4, 5, 6];
// 将 index [4, 6) 即 [5, 6] 从 index=1 开始复制
// a.copyWithin(1, 4, 6);
// console.log(a); // [ 1, 5, 6, 4, 5, 6 ]

// 4.find
// find() 方法用于找出数组中第一个符合条件的数组成员，如果没有符合条件的成员，返回 undefined。
// let a3 =[1,2,3,4];
// console.log(a3.findIndex(v=>v<0))

// 5. fill
// fill() 方法使用给定值，填充一个数组。
// 用于空数组的初始化非常方便：
// let a6 = new Array(3).fill(0);
// console.log(a6); // [ 0, 0, 0 ]
//fill() 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置（可以省略第三个参数，表示一直填充到数组末尾）
// let a4 = [1, 2, 3, 4, 5];
// let b = a4.fill(0, 2, 4);
// console.log(b); // [ 1, 2, 0, 0, 5 ]

// 6.entries()
// 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对

// var a5 =[1,2,3,4];
// console.dir(a5.entries())
// for (let [index, value] of a5.entries()) {
//     console.log(index, value);
// }


// 7.values()  chrome报错，要配置babel-polyfill
// values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
let a = ['a', 'b'];
for (let index of a.keys()) {
  console.log(index);
}
// 这段代码报错
// 其实数组可以直接遍历
// for (let value of a.values()) {
//   console.log(value);
// }

for (let [index, value] of a.entries()) {
  console.log(index, value);
}


// 8.includes()
// 比indexOf方便
var a7 = [1,2,3];
a7.includes(1) // true
a7.includes(1, 1) // false
// [NaN].includes(NaN) // true


let s = new Set();
[1, 2, 3, 4, 3, 2, 1].forEach(x => s.add(x));

console.log(s.size); // 4


let m = new Map([
    ['kobe', 1996],
    ['kidd', 1994],
    ['wade', 2003],
    ['yao', 2002]
  ]);
  console.log(m)
