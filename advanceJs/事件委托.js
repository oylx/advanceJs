function listen (element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        let el = e.target;
        while (!el.matches(selector)) {
            if (element === el) {
                el = null
                return
            }
            el = el.parentNode;
        }
        el && fn.call(el)
    })

}
listen(ul, 'click', 'li', () => { })

// ul>li*5>span

function clone (object) {
    var object2
    if (!(object instanceof Object)) {
        return object
    } else if (object instanceof Array) {
        object2 = []
    } else if (object instanceof Function) {
        object2 = eval(object.toString())
    } else if (object instanceof Object) {
        object2 = {}
    }
    // 你也可以把 Array Function Object 都当做 Object 来看待，参考 https://juejin.im/post/587dab348d6d810058d87a0a
    for (let key in object) {
        object2[key] = clone(object[key])
    }
    return object2
}

function listen (element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        let el = e.target
        while (!el.matches(selector)) {
            if (element === el) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    })
    return element
} // 工资 12k+ 的前端写的事件委托
listen(ul, 'click', 'li', () => { })

ul > li * 5 > span