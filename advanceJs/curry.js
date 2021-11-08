// function curry(cb){
//     return function(p1){
//         return function(p2){
//             return function(p3){
//                 return abc.call(undefined,p1,p2,p3)
//             }
//         }
//     }
// }
// function abc(x,y,z){
//     return [x,y,z]
// }
// const _curry = curry(abc);
// const x = _curry(1)(2)(3);
// console.log(abc.length)

// function buyFriut(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('apple')
//         }, 10000);
//     })
// }
// const result = await buyFriut();
// promise.then(()=>{
//     console.log('success')
// },()=>{
//     console.log('error')
// })

// function Promise1(res,rej){
//     this.resolve = function(){
//         return res.call(undefined,arguments)
//     }
//     this.reject = function(){
//         return rej.call(undefined,arguments)
//     }
//     this.then = function(){
//         return this
//     }
// }
// const promise = new Promise1((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(101)
//     },1000)
// })
// promise.then(res=>{
//     console.log(res)
// },rej=>{

// })


function abc(a,b,c){
    return [a,b,c];
}
// function curry(func,fixedParams){
//     if(!Array.isArray(fixedParams)){fixedParams=[]}
//     return function(){
//         const newParams = [].slice.call(arguments);
//         if(fixedParams.length+newParams.length<func.length){
//             return curry(func,fixedParams.concat(newParams));
//         }else{
//             return func.apply(undefined,fixedParams.concat(newParams))
//         }

//     }
// }

function curry_old(fn, args) {
    let length = fn.length
    args = args || []
    return function () {
        let newArgs = args.concat(Array.from(arguments))
        if(newArgs.length<length){
            return curry.call(this,fn,newArgs)
        }else{
            return fn.apply(this,newArgs)
        }
    }
}

{

// 第二版
    function sub_curry(fn) {
        const args = [].slice.call(arguments, 1);
        return function() {
            return fn.apply(this, args.concat([].slice.call(arguments)));
        };
    }

    function curry(fn, length) {

        length = length || fn.length;

        const slice = Array.prototype.slice;

        return function() {
            if (arguments.length < length) {
                const combined = [fn].concat(slice.call(arguments));
                return curry(sub_curry.apply(this, combined), length - arguments.length);
            } else {
                return fn.apply(this, arguments);
            }
        };
    }
    const x = function(a, b, c) {
        return [a, b, c];
    }
    const fn = curry(x);

    fn("a", "b", "c") // ["a", "b", "c"]
    fn("a", "b")("c") // ["a", "b", "c"]
    fn("a")("b")("c") // ["a", "b", "c"]
    fn("a")("b", "c") // ["a", "b", "c"]

}

{
    function sub_curry(fn){
        return function(){
            return fn()
        }
    }

    function curry(fn, length){
        length = length || 4;
        return function(){
            if (length > 1) {
                return curry(sub_curry(fn), --length)
            }
            else {
                return fn()
            }
        }
    }

    const fn0 = function(){
        console.log(1)
    }

    const fn1 = curry(fn0)

    fn1()()()() // 1

}

{
    let fn = () =>a => b => c => a+ b+ c
    let res = fn()
    let x = res(1)(2)(3)
    console.log(x);
}

