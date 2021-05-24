/**
 * 模拟join
 * this is array array.join('-')隐式传递this为array
 * @param char
 * @returns {*|string}
 */
Array.prototype.join = function (char) {
 let result = this[0] || '';
 let len = this.length;
 for (let i = 1; i < len; i++) {
  result += char + this[i];
 }
 return result;
};

/**
 * 模拟slice
 * 用slice将伪数组转化为数组,等同于es6的from
 * @param begin
 * @param end
 * @returns {[]}
 */
Array.prototype.slice = function (begin, end) {
 let result = [];
 begin = begin || 0;
 end = end || this.length;
 for (let i = begin; i < end; i++) {
  result.push(this[i]);
 }
 return result;
};

Array.prototype.splice = function (begin, deleteCount) {
 let length = this.length;
 while (deleteCount && begin < length) {
  this[begin] = this[begin + deleteCount];
  begin++;
 }
 for (let i = 2; i < arguments.length; i++) {
  this[this.length] = arguments[i];
 }
};

/**
 * 模拟sort
 * 对原数组排序
 * @param fn
 */
Array.prototype.sort = function (fn) {
 fn = fn || function (a, b) {return a - b;};
 let round = this.length - 1;
 for (let i = 0; i < round; i++) {
  let midIndex = this[i];
  for (let k = i + 1; k < this.length; k++) {
   if (fn.call(undefined, this[k], this[i]) < 0) {
    [this[i], this[k]] = [this[k], this[i]];
   }
  }
 }
};

/**
 * 模拟forEach
 * forEach因为用到了函数，每次迭代会有一个新的函数作用域；for只有一个作用域，著名面试题(解决:立即执行函数/forEach)
 * 所以没法break/continue,且return只能跳出当前作用域;for可以用
 * @param fn
 */
Array.prototype.forEach = function (fn) {
 for (let i = 0; i < this.length; i++) {
  if (i in this) {
   fn.call(undefined, this[i], i, this);
  }
 }
};

/**
 * 模拟map
 * 与forEach功能相似，区别在于返回值功能，所以尽可能用map替代forEach
 * @param fn
 * @returns {Array}
 */
Array.prototype.forEach = function (fn) {
 let result = [];
 for (let i = 0; i < this.length; i++) {
  if (i in this) {
   result[i] = fn.call(undefined, this[i], i, this);
  }
 }
 return result;
};

/**
 * 模拟filter
 * 重要步骤:fn.call()返回值为真才push
 * @param fn
 * @returns {Array}
 */
Array.prototype.filter = function (fn) {
 let result = [];
 let temp;
 for (let i = 0; i < this.length; i++) {
  if (i in this) {
   if (temp = fn.call(undefined, this[i], i, this)) {
    result.push(this[i]);
   }
  }
 }
 return result;
};

/**
 * 模拟reduce
 * result一直在内存中
 * @param fn
 * @param init
 * @returns {*}
 */
Array.prototype.reduce = function (fn, init) {
 let result = init;
 for (let i = 0; i < this.length; i++) {
  if (i in this) {
   result = fn.call(undefined, result, this[i], i, this);
  }
 }
 return result;
};

//map用reduce表示
array2 = array1.map(v => Math.pow(v, 2));
array2 = array1.reduce((result, next) => {
 result.push(Math.pow(v, 2));
 return result;
}, []);

//filter用reduce表示
array2 = array.filter((v) => v % 2 === 0);
array2 = array.reduce((result, v) => {
 if (v % 2 === 0) { result.push(v); }
 return result;
}, []);

