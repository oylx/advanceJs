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
// var _curry = curry(abc);
// var x = _curry(1)(2)(3);
// console.log(abc.length)

// function buyFriut(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('apple')
//         }, 10000);
//     })
// }
// var result = await buyFriut();
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
// var promise = new Promise1((resolve,reject)=>{
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
var curried = curry(abc);
// function curry(func,fixedParams){
//     if(!Array.isArray(fixedParams)){fixedParams=[]}
//     return function(){
//         var newParams = [].slice.call(arguments);
//         if(fixedParams.length+newParams.length<func.length){
//             return curry(func,fixedParams.concat(newParams));
//         }else{
//             return func.apply(undefined,fixedParams.concat(newParams))
//         }

//     }
// }
console.log(curried(1)(2)(3))

// function curry(fn, args) {
//     var length = fn.length;
//     var args = args || [];
//     return function() {
//         var newArgs = args.concat(Array.from(arguments));
//         if(newArgs.length < length) {
//             return curry.call(this, fn, newArgs);
//         } else {
//             return fn.apply(this, newArgs)
//         }
//     }
// }
function curry(fn, args) {
    let length = fn.length;
    args = args || [];
    return function () {
        var newArgs = args.concat(Array.from(arguments));
        if(newArgs.length<length){
            return curry.call(this,fn,newArgs)
        }else{
            return fn.apply(this,newArgs)
        }
    }
}

function curry(fn, args) {
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