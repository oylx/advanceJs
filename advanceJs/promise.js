// function Promise(fn){
//     var status='pending',successArray =[],failArray=[];
//     function successNotify(){
//         status = 'success';
//         toDoThen.apply(undefined,arguments)
//     }
//     function failNotofy(){
//         status ='fail';
//         toDoThen.apply(undefined,arguments)
//     }
//     function toDoThen(){
//         setTimeout(()=>{
//             if(status==='success'){
//                 successArray.forEach(val=>{
//                     val.apply(undefined,arguments)
//                 })
//             }else if(status==='fail'){
//                 failArray.forEach(val=>{
//                     val.apply(undefined,arguments)
//                 })
//             }
//         },0)
//     }
//     fn.call(undefined, successNotify,failNotofy);
//     this.then = function(successFn,failFn){
//         successArray.push(successFn);
//         failArray.push(failFn);
//         return undefined
//     }
// }
//
// var promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(101)
//     },1000)
// })
// promise.then((res)=>{
//     console.log(res)
// })

function 买菜 () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('买菜')
            resolve(['西红柿', '鸡蛋', '油菜']);
        }, 0)

    })
}
function 做饭 () {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('做饭')
            resolve({
                主食: '米饭',
                菜: ['西红柿炒鸡蛋', '清炒油菜']
            })
        }, 1)
    })
}
function 送饭 (resolve, reject) {
    return new Promise((resolve, reject) => {
        console.log('送饭')
        resolve('老婆的么么哒');
    })
}
function 通知我 () {
    return new Promise((resolve, reject) => {
        console.log('给保姆加100块钱奖金');
    })
}


new Promise(买菜)
    .then((买好的菜) => {
        return new Promise(做饭);
    })
    .then((做好的饭) => {
        return new Promise(送饭);
    })
    .then((送饭结果) => {
        电话通知我();
    })

// (async ()=>{
//     let 蔬菜 = await 买菜();
//     let 饭菜 = await 做饭(蔬菜);
//     let 送饭结果 = await 送饭(饭菜);
//     await 通知我(送饭结果);
// })();

class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then (onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            };
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            };
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
            };
        });
        return promise2;
    }
    catch (fn) {
        return this.then(null, fn);
    }
}
function resolvePromise (promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called;
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return;
                    called = true;
                    reject(err);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
//resolve方法
Promise.resolve = function (val) {
    return new Promise((resolve, reject) => {
        resolve(val)
    });
}
//reject方法
Promise.reject = function (val) {
    return new Promise((resolve, reject) => {
        reject(val)
    });
}
//race方法
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        };
    })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function (promises) {
    let arr = [];
    let i = 0;
    function processData (index, data) {
        arr[index] = data;
        i++;
        if (i == promises.length) {
            resolve(arr);
        };
    };
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => {
                processData(i, data);
            }, reject);
        };
    });
}
