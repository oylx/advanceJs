// 语法: new Map()

let myMap = new Map();

let keyObj = {};
let keyFunc = function () {};
let keyString = 'a string';

myMap.set(keyString, '和键\'a string\'关联的值');
myMap.set(keyObj, '和键keyObj关联的值');
myMap.set(keyFunc, '和键keyFunc关联的值');

console.log(myMap.get(keyString));
console.log(myMap.get({})); //undefined
console.log(myMap.get(() => {})); //undefined

//NAN作为map键
let myMap2 = new Map();
myMap2.set(NaN, 'not a number');
// console.log(myMap2.get(NaN)); // "not a number"

let otherNaN = Number("foo");
// console.log(otherNaN);
// console.log(myMap2.get(otherNaN));  // "not a number"

//for of 迭代Map
for(let [key,value] of myMap){
  console.log(key,value);
}

/**
 * Map与数组互转 new Map() <=> [...map] Array.from(map)
 */
let kvArray = [["key1", "value1"], ["key2", "value2"]];
let myApp3 = new Map(kvArray);
console.log(myApp3.get("key1"));
let array1 = Array.from(myApp3);
let array2 = [...myApp3];
console.log(array1,array2);
console.log(Array.isArray(array1),Array.isArray(array2));

/**
 * 数组合并
 */
let first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);

let second = new Map([[1, 'uno'], [2, 'dos']]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


















