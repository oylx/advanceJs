// 定义: Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用，Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的
// Set本身是一个构造函数，用来生成 Set 数据结构

// 1.基本使用
// 语法:new Set([iterable]) 接收一个数组（或者具有 iterable 接口的其他数据结构）, 返回一个新的Set对象
const set = new Set([1, 2, 1, 2])
console.log(set) // {1,2} 

// 2.属性及方法
// 属性:size: 返回集合中所包含的元素的数量
console.log(new Set([1, 2, 1, 2]).size) // 2

// 3.操作方法
// add(value): 向集合中添加一个新的项
// delete(value): 从集合中删除一个值
// has(value): 如果值在集合中存在，返回ture, 否则返回false
// clear(): 移除集合中的所有项
{
  let set = new Set()
  set.add(1)
  set.add(2)
  set.add(2)
  set.add(3)
  console.log(set) // {1,2,3}
  set.has(2) // true
  set.delete(2)
  set.has(2) // false
  set.clear()
}


// 4.遍历方法
// keys(): 返回键名的遍历器
// values(): 返回键值的遍历器
// entries(): 返回键值对的遍历器
// forEach(): 使用回调函数遍历每个成员
{
  let set = new Set([1, 2, 3, 4])

  // 由于set只有键值，没有键名，所以keys() values()行为完全一致
  console.log(Array.from(set.keys())) // [1,2,3,4]
  console.log(Array.from(set.values())) // [1,2,3,4]
  console.log(Array.from(set.entries())) //  [[1,1],[2,2],[3,3],[4,4]]

  set.forEach((item) => { console.log(item) }) // 1,2,3,4

}

// 5.应用场景
{
  // 数组去重
  let arr = [1, 1, 2, 3];
  let unique = [... new Set(arr)];

  let a = new Set([1, 2, 3]);
  let b = new Set([4, 3, 2]);

  // 并集
  let union = [...new Set([...a, ...b])]; // [1,2,3,4]

  // 交集
  let intersect = [...new Set([...a].filter(x => b.has(x)))];[2, 3]

  // 差集
  let difference = Array.from(new Set([...a].filter(x => !b.has(x))));[1]
}

// 6.WeakSet
// WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在WeakSet的集合中是唯一的
// WeakSet 的出现主要解决弱引用对象存储的场景, 其结构与Set类似
// 与Set的区别

// 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值
// WeakSet集合中对象的引用为弱引用。 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着WeakSet中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的
// WeakSet 的属性跟操作方法与 Set 一致，不同的是 WeakSet 没有遍历方法，因为其成员都是弱引用，弱引用随时都会消失，遍历机制无法保证成员的存在

// 上面一直有提到弱引用，那弱引用到底是指什么呢？

// 弱引用是指不能确保其引用的对象不会被垃圾回收器回收的引用，换句话说就是可能在任意时间被回收










