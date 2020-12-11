// 1.静态属性
/*
Math.E：常数e。
Math.LN2：2 的自然对数。
Math.LN10：10 的自然对数。
Math.LOG2E：以 2 为底的e的对数。
Math.LOG10E：以 10 为底的e的对数。
Math.PI：常数 Pi。
Math.SQRT1_2：1/2的平方根。
Math.SQRT2：2 的平方根。
*/

// 2.静态方法
// 2.1Math.abs()，返回参数值的绝对值。

// 2.2Math.max()，Math.min()
// Math.max方法返回参数之中最大的那个值，Math.min返回最小的那个值
// 如果参数为空, Math.min返回Infinity, Math.max返回-Infinity
Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity

// 2.3Math.floor()，Math.ceil()
// Math.floor方法返回小于参数值的最大整数（地板值）
// Math.ceil方法返回大于参数值的最小整数（天花板值）。
Math.floor(3.2) // 3
Math.floor(-3.2) // -4
Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
/**
 * 实现一个总是返回数值的整数部分的函数
 * @param {x} x 
 */
function ToInteger (x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

ToInteger(3.2) // 3
ToInteger(-3.5) // -3

// 2.4Math.round()方法用于四舍五入。
console.log(Math.round(-1.5));
console.log(Math.floor(-1.5));
console.log(Math.round(1.5));
console.log(Math.floor(1.5));

// 2.5Math.pow(),Math.pow方法返回以第一个参数为底数、第二个参数为幂的指数值。
/**
 * 下面是计算圆面积的方法
 * @param {半径} radius 
 */
function toSqure (radius) {
  return Math.PI * Math.pow(radius, 2)
}

// 2.7Math.sqrt() 方法返回参数值的平方根。如果参数是一个负值，则返回NaN。

// 2.8Math.log() 方法返回以e为底的自然对数值。

// 2.9Math.exp() M方法返回常数e的参数次方。
Math.exp(1) // 2.718281828459045
Math.exp(3) // 20.085536923187668

// 2.10Math.random() 返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。
/**
 * 任意范围的随机数生成函数
 * @param {最小值} min 
 * @param {最大值} max 
 */
function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5)

// 2.11三角函数方法，Math对象还提供一系列三角函数方法。
/*
Math.sin()：返回参数的正弦（参数为弧度值）
Math.cos()：返回参数的余弦（参数为弧度值）
Math.tan()：返回参数的正切（参数为弧度值）
Math.asin()：返回参数的反正弦（返回值为弧度值）
Math.acos()：返回参数的反余弦（返回值为弧度值）
Math.atan()：返回参数的反正切（返回值为弧度值）
*/



































