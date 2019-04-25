// 单例模式旨在保证一个类仅有一个实例，并提供一个全局的访问点
/**
 * 惰性单例模式
 * Singleton.getInstance实现了在需要的时候创建单例
 * @type {{getInstance}}
 */
var Singleton  =(function () {
   var instance;
   function createInstance() {
       return {a:1,b:2}
   }
   return {
       getInstance:function () {
           if(!instance){
               instance =  createInstance()
           }
           return instance
       }
   }
})()
var instance1 = Singleton.getInstance()
var instance2 = Singleton.getInstance()


