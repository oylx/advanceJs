/**
 *
 * @param obj
 * @returns {*}
 */
function deepClone(obj) {
    function isObj(item){
        return typeof item ==='object' || typeof item === 'function' && item!==null
    }
    if(!isObj(obj)){
        throw new  Error('非对象')
    }
    let newObj = Array.isArray(obj)?[...obj]:{...obj};
    console.log(newObj)
    Reflect.ownKeys(newObj).forEach(key=>{
        newObj[key] = isObj(obj[key])?deepClone(obj[key]):obj[key]
    })
    return newObj

}
var obj ={
    'name':'oylx',
    'family':function (x) {
        console.log(1)
    }
}
var c = deepClone(obj);


/**
 *
 * @param obj
 * @returns {Promise<any>}
 */
function structuralClone(obj) {
    return new Promise(resolve => {
        const { port1, port2 } = new MessageChannel()
        port1.onmessage = ev => resolve(ev.data)
        port2.postMessage(obj)
    })
}

var obj = {
    a: 1,
    b: {
        c: 2
    }
}

obj.b.d = obj.b

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const test = async () => {
    const clone = await structuralClone(obj)
    console.log(clone)
}