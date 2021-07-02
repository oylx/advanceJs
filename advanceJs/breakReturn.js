// break: 直接跳出 当前 的循环，从当前循环外面开始执行,忽略循环体中任何其他语句和循环条件测试。
// 它只能跳出一层循环，如果你的循环是嵌套循环，那么你需要按照你嵌套的层次，逐步使用break来跳出。
function myBreak() {
 for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
   if (j === 3) {
    break; // 只能跳出j的本层循环,i层继续执行，重点：只能跳出一层循环
   }
   console.log('break:', 'i', i, 'j', j);
  }
 }
}

myBreak();

// continue: 终止当前的一次循环过程，其 不 跳出循环,而是继续往下判断循环条件执行语句。
// 只能结束循环中的一次过程,但不能终止循环继续进行。
function myContinue() {
 for (let i = 0; i < 5; i++) {
  if (i === 3) {
   continue;
  }
  console.log('continue:', i);
 }
}

myContinue();

// return: 从当前的方法中退出,返回到该调用的方法的语句处,继续执行。
function myReturn() {
 for (let i = 0; i < 5; i++) {
  if (i === 3) {
   return i;
  }
  console.log('return:', i);
 }
}

let s = myReturn();
console.log('s: ' + s);

function mySwitch() {
 let arr = [1, 2, 3, 4, 5];
 for (let i = 0; i < arr.length; i++) {
  let cur = arr[i];
  switch (cur) {
   case 1:
    console.log(1);
    break;
   case 2:
    console.log(2);
    break;
   default:
    console.log(3);
  }
 }
}

mySwitch();

function myReturn1() {
 for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
   if (j === 3) {
    return; // 完全退出，返回到该调用的方法的语句处,继续执行
   }
   console.log('return:', 'i', i, 'j', j);
  }
 }
}
myReturn1()

// 总结：
//1、return语句的作用
//
// (1) return 从当前的方法中退出,返回到该调用的方法的语句处,继续执行
//
// (2) return 返回一个值给调用该方法的语句，返回值的数据类型必须与方法的声明中的返回值的类型一致，可以使用强制类型转换来是数据类型一致
//
// (3) return 当方法说明中用void声明返回类型为空时，应使用这种格式，不返回任何值。
//
// 2、break语句的作用
//
// (1) 只能在循环体内和switch语句体内使用break语句。
//
// (2) 当break出现在循环体中的switch语句体内时，其作用只是跳出该switch语句体。
//
// (3) 当break出现在循环体中，但并不在switch语句体内时，则在执行break后，跳出本层循环体。
//
// (4) 在循环结构中，应用break语句使流程跳出本层循环体，从而提前结束本层循环
//
// 3、continue语句作用
//
// (1) continue语句的一般形式为：continue;
//
// (2) 其作用是结束本次循环，即跳过本次循环体中余下尚未执行的语句，接着再一次进行循环的条件判定。
//
// (3) 注意：执行continue语句并没有使整个循环终止。在while和do-while循环中，continue语句使得流程直接跳到循环控制条件的测试部分 ，然后决定循环是否继续进行。
//
// (4) 在for 循环中，遇到continue后，跳过循环体中余下的语句，而去对for语句中的“表达式3”求值，然后进行“表达式2”的条件测试，
//
// 最后根据“表达式2”的值来决定for循环是否执行。在循环体内，不论continue是作为何种语句中的语句成分，都将按上述功能执行，这点与break有所不同


