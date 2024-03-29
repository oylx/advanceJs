// Map 对象保存键值对，并且能够记住键的原始插入顺序。
// 任何值(对象或者原始值) 都可以作为一个键或一个值。
// 一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个 for...of 循环在每次迭代后会返回一个形式为[key，value]的数组

// 1.基本使用
// 语法
// new Map([iterable]) Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。 每个键值对都会添加到新的 Map
{
  let map = new Map()
  map.set('name', 'vuejs.cn');
  console.log(map.get('name'))
}

// 2.属性及方法
// 基本跟 Set 类似，同样具有如下方法 属性
// size: 返回 Map 结构的元素总数
{
  let map = new Map()
  map.set('name', 'vuejs.cn');
  console.log(map.size) // 1

  console.log(new Map([['name', 'vue3js.cn'], ['age', '18']]).size) // 2
}

// 3.操作方法

// set(key, value): 向 Map 中加入或更新键值对
// get(key): 读取 key 对用的值，如果没有，返回 undefined
// has(key): 某个键是否在 Map 对象中，在返回 true 否则返回 false
// delete(key): 删除某个键，返回 true, 如果删除失败返回 false
// clear(): 删除所有元素
{
  let map = new Map()
  map.set('name', 'vue3js.cn')
  map.set('age', '18')
  console.log(map) // Map {"name" => "vuejs.cn", "age" => "18"}
  map.get('name') // vue3js.cn
  map.has('name') // true
  map.delete('name') // true
  map.has(name) // false
  map.clear() // Map {}
}

// 4.遍历方法
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回所有成员的遍历器
// forEach()：遍历 Map 的所有成员
{
  let map = new Map()
  map.set('name', 'vue3js.cn')
  map.set('age', '18')

  console.log([...map.keys()]) // ["name", "age"]
  console.log([...map.values()]) // ["vue3js.cn", "18"]
  console.log([...map.entries()]) // [['name','vue3js.cn'], ['age','18']]

  // name vuejs.cn
  // age 18
  map.forEach((value, key) => console.log(key, value))
}

// 5.应用场景
// Map 会保留所有元素的顺序, 是在基于可迭代的基础上构建的，如果考虑到元素迭代或顺序保留或键值类型丰富的情况下都可以使用，下面摘抄自 vue3 源码中依赖收集的核心实现
{
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect)

    // activeEffect.deps.push(dep)
    // ...
  }
}

// 6.类型的转换
// 6.1Map 转为 Array
{
  // 解构
  const map1 = new Map([[1, 1], [2, 2], [3, 3]])
  console.log([...map1])	// [[1, 1], [2, 2], [3, 3]]

  // Array.from()
  const map2 = new Map([[1, 1], [2, 2], [3, 3]])
  console.log(Array.from(map2))	// [[1, 1], [2, 2], [3, 3]]
}
// 6.2Array 转为 Map
{
  const map3 = new Map([[1, 1], [2, 2], [3, 3]])
  console.log(map3)	// Map {1 => 1, 2 => 2, 3 => 3}
}

// 6.3Map 转为 Object
{
  // 非字符串键名会被转换为字符串
  function mapToObj (map) {
    let obj = Object.create(null)
    for (let [key, value] of map) {
      obj[key] = value
    }
    return obj
  }
  const map4 = new Map().set('name', 'vue3js.cn').set('age', '18')
  mapToObj(map4) // {name: "vue3js.cn", age: "18"}
}

// 6.4Object 转为 Map{
{
  let obj = { 'a': 1, 'b': 2 };
  let map5 = new Map(Object.entries(obj))
}

// 7.WeakMap
// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的

// 与Map的区别

// Map 的键可以是任意类型，WeakMap 的键只能是对象类型
// WeakMap 键名所指向的对象，不计入垃圾回收机制
// WeakMap 的属性跟操作方法与 Map 一致，同 WeakSet 一样，因为是弱引用，所以 WeakMap 也没有遍历方法

// 8总结
// Set、Map、WeakSet、WeakMap、都是一种集合的数据结构
// Set、WeakSet 是[值,值]的集合，且具有唯一性
// Map 和 WeakMap 是一种[键,值]的集合，Map 的键可以是任意类型，WeakMap 的键只能是对象类型
// Set 和 Map 有遍历方法，WeakSet 和 WeakMap 属于弱引用不可遍历










