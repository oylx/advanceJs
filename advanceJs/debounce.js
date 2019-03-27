/**
 * debounce
 * @param fn
 * @param delay
 * @returns {Function}
 */
debounce = function (fn, delay) {
    let timer = undefined
    return function () {
        if(timer!==undefined){
            window.clearTimeout(timer)
        }
        timer =setTimeout(()=>{
            fn.call()
            timer = undefined
        },delay*1000)
    }
}
var f1 = debounce(()=>{
    console.log(1)
},3);

/**
 * throttle
 * @param fn
 * @param delay
 * @returns {Function}
 */
throttle=function (fn, delay) {
    let cd =false;
    return function () {
        if(cd){return}
        fn.call()
        cd=true
        console.log(new Date())
        setTimeout(()=>{
            cd =false
        },delay*1000)
    }
};
var f2=throttle(()=>{
    console.log(2)
},3);