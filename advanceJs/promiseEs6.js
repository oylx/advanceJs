class Promise{
    constructor(executor){
        this.state = 'pending';
        this.value =undefined;
        this.reason = undefined
        this.onResolvedCallbacks =[];
        this.onRejectedCallbacks =[];
        let resolve = value=>{
            if(this.state==='pending'){}
            this.state ='fulfilled';
            this.value = value;
            this.onResolvedCallbacks.forEach(fn=>fn())
        };
        let reject = reason=>{
            if(this.state==='pending'){
                this.state='rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        };
        try{
            executor(resolve,reject);
        }catch (e) {
            reject(e);
        }
    }
    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled ==='function'?onFulfilled : v=>v;
        onRejected = typeof onRejected === 'function'?onRejected : err=>{throw(err)}
        let promise2 = new Promise((resolve,reject)=>{
            if(this.state === 'fulfilled'){
                setTimeout(()=>{
                    try{
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2,x,resolve ,reject)
                    }catch (e) {
                        reject(e)
                    }
                },0)
            }
            if(this.state ==='rejected'){
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason);
                        resolvePromise(promise2,x,resolve,reject)
                    }catch (e) {
                        reject(e)
                    }
                },0)
            }
            if(this.state==='pending'){
                this.onResolvedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2,x,resolve ,reject)
                        }catch (e) {
                            reject(e)
                        }
                    },0)
                });
                this.onRejectedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onRejected(this.value);
                            resolvePromise(promise2,x,resolve ,reject)
                        }catch (e) {
                            reject(e)
                        }
                    },0)
                })
            }
        })
        return promise2;
    }
    catch(fn){
        return this.then(null,fn)
    }
}
function resolvePromise(promise2,x,resolve,reject){
    if(x===promise2){
        return reject(new TypeError('Chaining cycle detected for promise'))
    }
    let called;
    if(x!==null && (typeof  x ==='function' || typeof x ==='object')){
        try{
            let then = x.then;
            if(typeof then === 'function'){
               then.call(x,y=>{
                   if(called) return;
                   called =true;
                   resolvePromise(promise2,y,resolve,reject)
               },err=>{
                   if(called) return;
                   called = true
                   reject(err)
               })
            }else{
                resolve(x)
            }
        }catch (e) {
            if(called) return
            called = true
            reject(e)
        }
    }else{
        resolve(x)
    }
}

Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
Promise.resolve =function (val) {
    return new Promise((resolve,reject)=>{
        resolve(val)
    })
}
Promise.reject = function (reason) {
    return new Promise((resolve,reject)=>{
        reject(val)
    })
}
Promise.prototype.finally = function (callback) {
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => {
            return value;
        });
    }, (err) => {
        return Promise.resolve(callback()).then(() => {
            throw err;
        });
    });
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return;
        } else {
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then((data) => {
                    resolve(data);
                    return;
                }, (err) => {
                    reject(err);
                    return;
                });
            }
        }
    });
}
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];
        if (promises.length === 0) {
            resolve(result);
        } else {
            setTimeout(() => {
                function processValue(i, data) {
                    result[i] = data;
                    if (++index === promises.length) {
                        resolve(result);
                    }
                }
                for (let i = 0; i < promises.length; i++) {
                    //promises[i] 可能是普通值
                    Promise.resolve(promises[i]).then((data) => {
                        processValue(i, data);
                    }, (err) => {
                        reject(err);
                        return;
                    });
                }
            })
        }
    });
}

var promise1 = new Promise((resolve, reject) => {
    resolve(3);
})
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); //[3, 42, 'foo']
},(err)=>{
    console.log('err')
    console.log(err)
});

var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});






