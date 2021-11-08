// 1.JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。
/*
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
（1）value,value是该属性的属性值，默认为undefined。
（2）writable,writable是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为true。
（3）enumerable,enumerable是一个布尔值，表示该属性是否可遍历，默认为true。如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性。
（4）configurable,configurable是一个布尔值，表示可配置性，1.目标属性是否可以使用delete删除;2.目标属性是否可以再次设置特性。默认为true。如果设为false，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。
（5）get,get是一个函数，表示该属性的取值函数（getter），默认为undefined。
（6）set,set是一个函数，表示该属性的存值函数（setter），默认为undefined。
*/

// 2.Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptor方法可以获取属性描述对象。它的第一个参数是一个对象，第二个参数是一个字符串，对应该对象的某个属性名。

var obj = { p: 'a' };
Object.getOwnPropertyDescriptor(obj, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 3.Object.getOwnPropertyNames()
// Object.getOwnPropertyNames方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。
// 这跟Object.keys的行为不同，Object.keys只返回对象自身的可遍历属性的全部属性名。


var obj = Object.defineProperties({}, {
  p1: { value: 1, enumerable: true },
  p2: { value: 2, enumerable: false }
});

Object.getOwnPropertyNames(obj)// ["p1", "p2"]
Object.keys(obj)//["p1"]
Object.getOwnPropertyNames([]) // [ 'length' ]
Object.keys([]) // []
Object.getOwnPropertyNames(Object.prototype)
// ['hasOwnProperty',
//  'valueOf',
//  'constructor',
//  'toLocaleString',
//  'isPrototypeOf',
//  'propertyIsEnumerable',
//  'toString']
Object.keys(Object.prototype) // []

// 4.Object.defineProperty()，Object.defineProperties()
// Object.defineProperty方法允许通过
// Object.defineProperty(object, propertyName, attributesObject),方法接受三个参数。

var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123

// Object.defineProperties同时定义了obj对象的三个属性。其中，p3属性定义了取值函数get，即每次读取该属性，都会调用这个取值函数。
// 注意，一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。
function fn1 () {
  var obj = {};

  Object.defineProperty(obj, 'p', {
    value: 123,
    get: function () { return 456; }
  });
  // value和get矛盾

  Object.defineProperty(obj, 'p', {
    writable: true,
    get: function () { return 456; }
  });
  // writeable和get矛盾
}
// fn1()

// Object.defineProperty()和Object.defineProperties()的第三个参数，是一个属性对象。它的writable、configurable、enumerable这三个属性的默认值都为false

// 5.Object.prototype.propertyIsEnumerable(),实例对象的propertyIsEnumerable方法返回一个布尔值，用来判断某个属性是否可遍历

// 6.元属性,属性描述对象的各个属性称为“元属性”，因为它们可以看作是控制属性的属性。

// 6.1value属性是目标属性的值
function fn0 () {
  var obj = {};
  obj.p = 123;

  Object.getOwnPropertyDescriptor(obj, 'p').value
  // 123

  Object.defineProperty(obj, 'p', { value: 246 });
  obj.p // 246
}
fn0()

// 6.2writable,writable属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。
/**
 * 注意，正常模式下，对writable为false的属性赋值不会报错，只会默默失败。但是，严格模式下会报错，即使对a属性重新赋予一个同样的值
 */
function fn2 () {
  var obj = {};

  Object.defineProperty(obj, 'a', {
    value: 37,
    writable: false
  });

  obj.a // 37
  obj.a = 25;
  obj.a // 37
}
fn2()

function fn3 () {
  'use strict';
  var obj = {};

  Object.defineProperty(obj, 'a', {
    value: 37,
    writable: false
  });

  obj.a = 37;
  // Uncaught TypeError: Cannot assign to read only property 'a' of object
}
// fn3()

/**
 * 如果原型对象的某个属性的writable为false，那么子对象将无法自定义这个属性,
 */
function fn4 () {
  var proto = Object.defineProperty({}, 'foo', {
    value: 'a',
    writable: false
  });

  var obj = Object.create(proto);

  obj.foo = 'b';
  obj.foo // 'a'
}
fn4()

/**
 * 通过覆盖属性描述对象，绕过这个限制
 */
function f5 () {
  var proto = Object.defineProperty({}, 'foo', {
    value: 'a',
    writable: false
  });

  var obj = Object.create(proto);
  Object.defineProperty(obj, 'foo', {
    value: 'b'
  });

  obj.foo // "b"
}
// fn5()

// 6.3enumerable,enumerable（可遍历性）返回一个布尔值，表示目标属性是否可遍历。

// 如果一个属性的enumerable为false，下面三个操作不会取到该属性。
/*
for..in循环
Object.keys方法
JSON.stringify方法
*/
// 注意，for...in循环包括继承的属性，Object.keys方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用Object.getOwnPropertyNames方法。
// 另外，JSON.stringify方法会排除enumerable为false的属性，有时可以利用这一点。如果对象的 JSON 格式输出要排除某些属性，就可以把这些属性的enumerable设为false。

// 6.4configurable
// configurable(可配置性）返回一个布尔值，决定了是否可以修改属性描述对象。也就是说，configurable为false时，value、writable、enumerable和configurable都不能被修改了。
function fn6 () {
  var obj = Object.defineProperty({}, 'p', {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(obj, 'p', { value: 2 })
  // TypeError: Cannot redefine property: p

  Object.defineProperty(obj, 'p', { writable: true })
  // TypeError: Cannot redefine property: p

  Object.defineProperty(obj, 'p', { enumerable: true })
  // TypeError: Cannot redefine property: p

  Object.defineProperty(obj, 'p', { configurable: true })
  // TypeError: Cannot redefine property: p
}
// fn6()

// 7.存取器
// 除了直接定义以外，属性还可以用存取器（accessor）定义。其中，存值函数称为setter，使用属性描述对象的set属性；取值函数称为getter，使用属性描述对象的get属性。
// 一旦对目标属性定义了存取器，那么存取的时候，都将执行对应的函数。利用这个功能，可以实现许多高级特性，比如某个属性禁止赋值。
function fn7 () {
  var obj = Object.defineProperty({}, 'p', {
    get: function () {
      return 'getter';
    },
    set: function (value) {
      console.log('setter: ' + value);
    }
  });

  obj.p // "getter"
  obj.p = 123 // "setter: 123"
}
fn7()
// JavaScript 还提供了存取器的另一种写法。
function fn8 () {
  var obj = {
    get p () {
      return 'getter';
    },
    set p (value) {
      console.log('setter: ' + value);
    }
  };
}
fn8()


// 8.对象的拷贝
function fn9 () {
  var extend = function (to, from) {
    for (var property in from) {
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        Object.getOwnPropertyDescriptor(from, property)
      );
    }

    return to;
  }

  extend({}, { get a () { return 1 } })
  // { get a(){ return 1 } })
}
fn9()

// 9.控制对象状态
// 9.1 Object.preventExtensions(),Object.preventExtensions方法可以使得一个对象无法再添加新的属性。
// 9.2 Object.isExtensible()
// Object.isExtensible方法用于检查一个对象是否使用了Object.preventExtensions方法。也就是说，检查是否可以为一个对象添加属性
function fn10 () {
  var obj = new Object();

  Object.isExtensible(obj) // true
  Object.preventExtensions(obj);
  Object.isExtensible(obj) // false
}

// 对象属性的枚举
// 1.for ... in
// 循环可以遍历对象中所有可枚举的对象属性(包括对象自有属性和继承的属性)。注意:会因为各个浏览器不同导致对象属性遍历的顺序与当初构建时的顺序不一致
// 使用 for...in迭代，遍历出【自身】以及【原型链】上的【可枚举】的属性，通过hasOwnProperty进行筛选能遍历出自身可枚举属性
// for (prop in obj) {
//   if (!obj.hasOwnProperty(prop)) continue; // 跳过继承属性
// }
// 2.Object.keys()
// 直接遍历出的自身可枚举属性组成的数组
// 3.Object.getOwnPropertyNames()
// 可以访问自身可枚举属性与不可枚举属性
// 4.for ... of
{
  function Person () {
    this.name = 'fyflying'
  }
  Person.prototype = {
    hobby: 'coding'
  }
  var person = new Person()
  Object.defineProperty(person, 'sex', {
    value: 'female'
  })
  for (var item in person) {
    console.log(item + ':' + person[item])
  }
  // name:fyflying hobby:coding
  Object.keys(person) // ["name"]
  JSON.stringify(person) //"{"name":"fyflying"}"

}

{
  var obj = {}
  //第一种情况：writable设置为false，不能重写。
  Object.defineProperty(obj, "newKey", {
    value: "hello",
    writable: false
  });
  //更改newKey的值
  obj.newKey = "change value";
  console.log(obj.newKey);  //hello

  //第二种情况：writable设置为true，可以重写
  Object.defineProperty(obj, "newKey", {
    value: "hello",
    writable: true
  });
  //更改newKey的值
  obj.newKey = "change value";
  console.log(obj.newKey);  //change value
}
{
  var obj = {}
  //第一种情况：enumerable设置为false，不能被枚举。
  Object.defineProperty(obj, "newKey", {
    value: "hello",
  });

  //枚举对象的属性
  for (var attr in obj) {
    console.log(attr);
  }
  //第二种情况：enumerable设置为true，可以被枚举。
  Object.defineProperty(obj, "newKey", {
    value: "hello",
    writable: false,
    enumerable: true
  });

  //枚举对象的属性
  for (var attr in obj) {
    console.log(attr);  //newKey
  }
}






