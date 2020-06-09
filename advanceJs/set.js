/*
 * 语法:new Set([iterable]);
 */

let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('some text');
let o = {
  a: 1,
  b: 2,
};
mySet.add(o);
mySet.add(o);

// console.log(mySet);

mySet.has(1); //true
mySet.has(o); //true

// mySet.delete(o); //true，删除o
// mySet.size; //3

/**
 * Set与Array互转
 */
let mySet2 = new Set([1, 2, 3, 4, {
  a: 1,
  b: 2,
}]);
let arr = [...mySet2];

/**
 * set1与set2求交集
 */
let x = new Set([...mySet].filter(v => mySet2.has(v)));
console.log(x);

/**
 * set1与set2求并集
 */
let difference = new Set([...mySet].filter(v => !mySet2.has(v)));

let x1 = new Set([{id:1},{id:2}])
let x2 = new Set([{id:1},{id:3}])
let x3 = new Set([...x1].filter(v => !x2.has(v)));
console.log(x3);

let a1 = [{id:1},{id:2}]
let a2 = [{id:1},{id:3}]
for(const item1 of a2){  //循环json数组对象的内容

  let flag = true;  //建立标记，判断数据是否重复，true为不重复

  for(const item2 of a1){  //循环新数组的内容

    if(item1.id==item2.id){ //让json数组对象的内容与新数组的内容作比较，相同的话，改变标记为false
      flag = false;
    }

  }

  if(flag){ //判断是否重复
    a1.push(item1); //不重复的放入新数组。  新数组的内容会继续进行上边的循环。
  }


}
console.log(a1);
















