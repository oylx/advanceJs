/**
 * AOP 面向切面编程
 * @type {{}}
 */
const AOP = {}
AOP.before = function (fn, before) {
  return function() {
    before.apply(this,arguments)
    fn.apply(this, arguments)
  }
}
AOP.after = function(fn, after) {
  return function () {
    fn.apply(this, arguments)
    after.apply(this, arguments)
  }
}

function submit() {
  console.log(this)
  console.log('提交数据')
}
function check() {
  console.log(this)
  console.log('先进行校验')
}

/**
 * 在原有功能基础上做点装饰：点击按钮，提交数据前做个校验
 */
submit = AOP.before(submit, check)
document.querySelector('.btn').onclick = submit
