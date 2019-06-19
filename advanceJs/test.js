// function fn(timer) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },timer)
//     })
// }
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject()
//     },500)
// })
// promise.then(()=>{
//     console.log(1)
// },()=>{
//     console.log(2)
// })



// let a=[2,5,11],b=[4,7,9,10];
// for(let i=0;i<b.length;i++){
//     let curValue = a[0],left=b[i],right = b[i+1];
//     if(curValue<left){b.splice(i,0,curValue)}
//     else if(left<curValue && right>curValue){
//         b.splice(i+1,0,curValue)
//     }else if(left <curValue && !right){
//         b.splice(i+1,0,curValue)
//     }else{
//         continue
//     }
//     a.shift()
//
//
// }
// console.log(b)
//
//
// let c = [1,2,3,4,5,6,6,7,7,8];
// function merge(c) {
//     for(let i=0;i<c.length;i++){
//         if(c[i]===c[i+1]){
//             c.splice(i,1);
//             i--
//         }
//
//     }
// }
// merge(c)
// console.log(c)

// let merge = (a) => a.reduce((result, n)=> {result.concat(result[result.length-1] === n ? [] : [n])
//     return result},[])
// merge(c)
// console.log(c)
//
// for(let i=0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i+1)
//     },Math.pow(2,i)*1000)
// }
// d.map(()=>{setTimeout((v,i)=>{console.log(v)},)})


// let NB = [1,2,3,4];
// let underscore=[5,6,7,8];
// window.NB = NB =underscore;
// console.log('window.nb:'+window.NB);
// console.log('NB:'+NB);
// console.log('underscore:'+underscore);//underscore转NB适配器。
//
// let ul =document.getElementById('box');
// ul.addEventListener('click',function (e) {
//     console.dir(e.target.nodeName.toLowerCase())
// })
//
// const handler={
//     get(target,property){
//         if(property in target){
//             return target[property]
//         }else{
//             throw new ReferenceError("Property \"" + property + "\" does not exist.")
//         }
//
//     }
// }


// function sort(arr) {
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// function sort(arr) {
//     let minIndex;
//     for(let i=0;i<arr.length-1;i++){
//         minIndex=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 [arr[minIndex],arr[j]]=[arr[j],arr[minIndex]]
//             }
//         }
//     }
//
// }

// function sort(arr) {
//     let prevIndex,current;
//     for(let i=1;i<arr.length;i++){
//         prevIndex =i-1;
//         current = arr[i];
//         while (prevIndex >= 0 && arr[prevIndex] > current) {
//             arr[prevIndex+1]=arr[prevIndex];
//             prevIndex--
//         }
//         arr[prevIndex+1] =current
//     }
// }
// function sort(arr, maxValue) {
//     let bucketLength = maxValue+1,
//         bucket = new Array(bucketLength),
//         sortIndex=0;
//     for(let i=0;i<arr.length;i++){
//         if(bucket[arr[i]]===undefined){
//             bucket[arr[i]]=0
//         }
//         bucket[arr[i]]++
//     }
//     for(let i=0;i<bucketLength;i++){
//         while(bucket[i]>0){
//             arr[sortIndex++]=i
//             bucket[i]--
//         }
//     }
// }

// let quickSort = function(arr) {
//     if (arr.length <= 1) { return arr; }
//     let pivotIndex = Math.floor(arr.length / 2);
//     let pivot = arr.splice(pivotIndex, 1)[0];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([pivot], quickSort(right));
// };

// function quickSort(arr) {
//     if(arr.length<1) return arr;
//     let pivotIndex = Math.floor(arr.length/2);
//     let pivot = arr.splice(pivotIndex,1)[0];
//     let left=[],right=[];
//     for(let i=0;i<arr.length;i++){
//         arr[i]<pivot?left.push(arr[i]):right.push(arr[i])
//     }
//     return quickSort(left).concat([pivot]).concat(right)
// }

// function mergeSort(arr){
//     if(arr.length<2)return arr
//     let middle = Math.floor(arr.length/2),
//         left = arr.slice(0,middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right))
// }
//
// function merge(left,right){
//     let result = [];
//     while (left.length > 0 && right.length > 0) {
//         left[0]<right[0]?result.push(left.shift()):result.push(right.shift())
//     }
//     while (left.length) result.push(left.shift())
//     while (right.length) result.push(right.shift())
//     return result
// }

// let len;    //因为声明的多个函数都需要数据长度,所以把len设置成为全局变量
// function heapSort(arr) {
//     buildMaxHeap(arr);
//     for (let i = arr.length-1; i > 0; i--) {
//         [arr[0],arr[i]]=[arr[i],arr[0]];
//         len--;
//         heapify(arr, 0);
//     }
//     return arr;
// }
// function buildMaxHeap(arr) {   //建立大顶堆
//     len = arr.length;
//     for (let i = Math.floor(len/2); i >= 0; i--) {
//         heapify(arr, i);
//     }
// }
// function heapify(arr, i) {     //堆调整
//     let left = 2 * i + 1,
//         right = 2 * i + 2,
//         largest = i;
//
//     if (left < len && arr[left] > arr[largest]) {
//         largest = left;
//     }
//
//     if (right < len && arr[right] > arr[largest]) {
//         largest = right;
//     }
//
//     if (largest != i) {
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr, largest);
//     }
// }




// let arr=[3,2,1];
// arr =heapSort(arr)
// console.log(arr)

// let counter =[]
// function radixSort(arr, maxDigit) {
//     let mod = 10;
//     let dev = 1;
//     for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
//         for(let j = 0; j < arr.length; j++) {
//             let bucket = parseInt((arr[j] % mod) / dev);
//             if(counter[bucket]==null) {
//                 counter[bucket] = [];
//             }
//             counter[bucket].push(arr[j]);
//         }
//         let pos = 0;
//         for(let j = 0; j < counter.length; j++) {
//             let value = null;
//             if(counter[j]!=null) {
//                 while ((value = counter[j].shift()) != null) {
//                     arr[pos++] = value;
//                 }
//             }
//         }
//     }
//     return arr;
// }
//
// let arr6 = [13,13,5,6,5,0,567,8990];
// radixSort(arr6,5);
// console.log(arr6)

// let obj={a:1,b:2}
// Object.defineProperty(obj,'x',{
//     get(){},
//     set(value){}
// })
//
// var undefined =1
// console.log(undefined)
//
// let o = {
//     get name(){return 'a1'}
//
// }
// Object.defineProperty(o,'name2',{
//     value:'a2',
//     writable:false
// })

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('第一次resolve（1）')
//         resolve(1)
//     },0)
// })
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('第二次reject（2）')
//         reject(2)
//     },1000)
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('第三次resolve（3）')
//         resolve(3)
//     },1000)
// })
// promise.then((onfullfiled)=>{
//     console.log("onfullfiled:"+onfullfiled)
//     return promise2
// },(onRejected)=>{
//     console.log("onRejected:"+onRejected)
//     return 'fail'
// }).then((onfullfiled)=>{
//     console.log("onfullfiled:"+onfullfiled)
// },(onRejected)=>{
//     console.log("onRejected:"+onRejected)
//     return 'fail'
// }).then((onfullfiled)=>{
//     console.log("onfullfiled:"+onfullfiled)
//     return promise3
// },(onRejected)=>{
//     console.log("onRejected:"+onRejected)
//     return 'fail2'
// }).catch(error=>{
//     console.log(error)
// })


// function buyVegetables(resolve,reject) {
//     setTimeout(function(){
//         reject(['1','2','3']);
//     },100)
// }
// function cook(resolve, reject){
//     setTimeout(function(){
//         resolve ({
//             主食: '米饭',
//             菜: ['4','5']
//         })
//     },100)
// }
// function send(resolve,reject){
//     resolve('老婆的么么哒');
// }
// function callme(){
//     console.log('给保姆加100块钱奖金');
// }
// new Promise(buyVegetables)
//     .then((onfullfiled, onRejected)=>{
//         console.log('buyVegetables:'+onfullfiled)
//         return new Promise(cook);
//     })
//     .then((onfullfiled, onRejected)=>{
//         console.log('cook:'+onRejected)
//         return new Promise(send);
//     })
//     .then((onfullfiled, onRejected)=>{
//         console.log('send结果:'+onRejected)
//         callme();
//     })

// class Animal{
//     constructor(){
//         this._type='dog'
//     }
//     static eat(){
//         console.log('eat')
//     }
//     get type(){
//         return this._type
//     }
//     set type(val){
//         this._type=val
//     }
// }
// let a1 = new Animal()

function 获取用户信息(name) {
    return new Promise(function (resolve, reject) {
        if(name==='oy'){
            console.log('i know')
            resolve('lx')
        }else{
            console.log('i dont know')
            reject('dont ask me i dont know')
        }

    })
}
function 打印用户信息(name) {
    return new Promise(function (resolve, reject) {
        console.log('打印用户信息'+name)
        resolve(name)
    })
}
function 获取另一个用户信息(name) {
    return new Promise(function (resolve, reject) {
        console.log('获取另一个用户信息'+name)
        resolve(name)
    })
}
function 失败信息(onRjected){
    console.log(onRjected)
    return Promise.reject('错误')
    return new Promise(function (resolve, reject) {
        reject('错误')
    })
}

// 获取用户信息('oy1').then(打印用户信息,失败信息)
//     .then(获取另一个用户信息,失败信息)
//     .then(打印用户信息,失败信息)
//     .catch(error=>{
//         console.log(error)
//     })

// async function fn3(){
//     try{
//         let 用户信息 = await 获取用户信息('oy1');
//         console.log(用户信息)
//
//     }catch (e) {
//         console.log(e)
//     }
//
// }
// fn3()
//
//
// var myObject={
//     foo:1,
//     bar:2,
//     get baz(){
//         return this.foo+this.bar
//     }
// }
// var myReceiver={
//     foo:3,
//     bar:3
// }
// var x =Reflect.get(myObject,'baz',myReceiver)



