// Object.prototype.print = function () {
//   console.log(this);
// };

// var obj = new Object();
// obj.print() // Object

// 2.Object()
// Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
// 如果参数为空（或者为undefined和null），Object()返回一个空对象。
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

console.log(obj instanceof Object); // true
console.log({ ...obj }); // true

var obj = Object(1);
obj instanceof Object // true
obj instanceof Number
console.log(obj);

// 写一个判断变量是否为对象的函数
function isObject (value) {
  const x = value === Object(value)
  console.log(x);
  return x
}

isObject([]) // true
isObject(null) // false

// 3.Object 构造函数
// Object不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用new命令。
// Object构造函数的首要用途，是直接通过它来生成新对象。
// var obj = new Object();

var arr1 = ['Hello', 'World']
var res1 = Object.keys(arr1) //只返回可枚举 => ["0", "1"], 一般情况下，几乎总是使用Object.keys方法，遍历数组的属性
var res2 = Object.getOwnPropertyNames(arr1)//方法还返回不可枚举的属性名 => ["0", "1", "length"]
console.log(res1, res2);


// 4.热门API
// 4.1 Object.prototype.valueOf(), 返回一个对象的“值”，默认情况下返回对象本身
var obj = new Object(1);
console.log(obj.valueOf()); // 1

// 4.2 Object.prototype.toString(),返回一个对象的字符串形式，默认情况下返回类型字符串
var o2 = { a: 1 };
console.log(o2.toString()); // "[object Object]"
// 通过自定义toString方法，可以让对象在自动类型转换时，得到想要的字符串形式。
// 对象用于字符串加法时，会自动调用toString方法。由于自定义了toString方法，所以返回字符串hello world
// 数组、字符串、函数、Date 对象调用toString方法，并不会返回[object Object]，因为它们都自定义了toString方法，覆盖原始方法
var obj = new Object();
obj.toString = function () {
  return 'hello';
};
console.log(obj + ' ' + 'world'); // "hello world"
[1, 2, 3].toString(); // "1,2,3"

'123'.toString(); // "123"

(function () {
  return 123;
}).toString();

(new Date()).toString();
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"

// 4.3 toString() 的应用：判断数据类型
// Object.prototype.toString.call(value)
// 写出一个比typeof运算符更准确的类型判断函数type
var type = function (o) {
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true

// 4.4 Object.prototype.toLocaleString()
// 方法与toString的返回结果相同，也是返回一个值的字符串形式

// 4.5 Object.prototype.hasOwnProperty()
// 方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。
var obj = {
  p: 123
};

obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false

// 4.6Object.defineProperty
// 作用是直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
// Object.defineProperty(obj, prop, descriptor)
// obj：必需。目标对象  prop：必需。需定义或修改的属性的名字  descriptor：必需。目标属性所拥有的特性

/*
let person = {}
Object.defineProperty(person, 'name', {
  writable: true || false,
  configurable: true || false,
  enumerable: true || false,
  value: 'gif'
})
*/

/*
writable：是否可以被重写，true可以重写，false不能重写，默认为false。
enumerable：是否可以被枚举（使用for...in或Object.keys()）。设置为true可以被枚举；设置为false，不能被枚举。
默认为false。
value：值可以使任意类型的值，默认为undefined
configurable：是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为false。*/

// 当使用了getter或setter方法，不允许使用writable和value这两个属性
let person = {};
let n = 'gjf';
Object.defineProperty(person, 'name', {
  configurable: true,
  enumerable: true,
  get () {
    //当获取值的时候触发的函数    
    return n
  },
  set (val) {
    //当设置值的时候触发的函数,设置的新值通过参数val拿到    
    n = val;
  }
});
console.log(person.name) //gjf
person.name = 'newGjf'
console.log(person.name) //newGif
















