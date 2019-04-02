/**
 * 单例模式
 * 保证全局只有一个对象可以访问
 */
class Singleton{
    constructor() {}
}
Singleton.getInstance = (function () {
   let instance
   return function () {
       if(instance){
           instance = new Singleton()
       }
       return instance
   }
})()
let s1= Singleton.getInstance()
let s2= Singleton.getInstance()
console.log(s1===s2)

/**
 * 适配器模式
 * 接口不兼容，不改变已有接口，包装一层实现2个接口的协作
 * eg:vue computed
 */
class Person {
    getOriginName(){
        return '大名：刘亦菲 '
    }
}
class Actress{
    constructor(props) {
        this.person = new Person();
    }
    getNickName(){
        return ' 小名：茜茜'
    }
    getName(){
        return this.person.getOriginName()+this.getNickName()
    }
}

let actress = new Actress()
console.log(actress.getName())

/**
 * 代理模式
 * @type {HTMLElement}
 * 为对象提供一种代理以控制对这个对象的访问
 * 代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。
 * eg:事件代理
 * eg: 一个工厂制造商品（目标对象），你可以给这个工厂设置一个业务代理（代理对象），提供流水线管理，订单，运货，淘宝网店等多种行为能力（扩展属性）。当然，里面还有最关键的一点就是，这个代理能把一些骗纸和忽悠都过滤掉，将最真实最直接的订单给工厂，让工厂能够专注于生产（控制访问）。
 */

var ul =document.getElementById('box');
ul.addEventListener('click',function (e) {
    console.dir(e.target.nodeName.toLowerCase())
})

// 真实工厂
class Factory {

    constructor(count) {
        // 工厂默认有1000件产品
        this.productions = count || 1000
    }

    // 生产商品
    produce(count) {
        // 原则上低于5个工厂是不接单的
        this.productions += count
    }

    // 向外批发
    wholesale(count) {
        // 原则上低于10个工厂是不批发的
        this.productions -= count
    }
}

// 代理工厂
class ProxyFactory extends Factory {

    // 代理工厂默认第一次合作就从工厂拿100件库存
    constructor(count = 100) {
        super(count)
    }

    // 代理工厂向真实工厂下订单之前会做一些过滤
    produce(count) {
        if (count > 5) {
            super.produce(count)
        } else {
            console.log('低于5件不接单')
        }
    }

    wholesale(count) {
        if (count > 10) {
            super.wholesale(count)
        } else {
            console.log('低于10件不批发')
        }
    }

    taobao(count) {
        // ...
    }

    logistics() {
        // ...
    }
}

// 创建一个代理工厂
const proxyFactory = new ProxyFactory()

// 通过代理工厂生产4件商品，被拒绝
proxyFactory.produce(4)

// 通过代理工厂批发20件商品
proxyFactory.wholesale(20)

// 代理工厂的剩余商品 80
console.log(proxyFactory.productions)


/**
 * 发布-订阅模式
 * 通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知。
 * eg:点击一个按钮触发了点击事件就是使用了该模式
 * vm.$emit(event, […args]) // publish
 * vm.$on(event, callback) // subscribe
 * vm.$off([event, callback]) // unsubscribe
 * @type {Element}
 */
let ul = document.querySelector('#ul')
ul.addEventListener('click', (event) => {
    console.log(event.target);
})


