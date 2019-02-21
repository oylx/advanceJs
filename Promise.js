// let promise = new Promise(function (resolve, reject) {
//     console.log('Promise');
//     console.log("resolve:"+resolve);
//     resolve(1);
// });

// promise.then(function (res) {
//     console.log('res:'+res);
//     console.log('Resolved.');
// });

// console.log('Hi!');

let async1 = () => {
    let promise = new Promise((resolve, reject) => {
        // resolve(1)
        reject(1)
    })
    return promise
}
let async2 =()=>{
    // console.log('async2');
    let promise = new Promise((resolve,reject)=>{
        resolve(2)
    })
    return promise
}
async1().then((res)=>{
    console.log("res:"+res)
    // return async2();
    return 3
}).then(res=>{
    console.log("res:"+res)
}).catch(error=>{
    console.log(error)
})