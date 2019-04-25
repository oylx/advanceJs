// 单例模式旨在保证当前类仅有一个实例，并提供一个全局的访问点
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


/**
 * 创建遮罩层
 * @type {{getInstance}}
 */
var createMask = (function () {
    let mask;
    function createInstance() {

    }
    return {
        getInstance:function () {
            if(!mask){
                mask = document.createElement('div');
                // 设置样式
                mask.style.position = 'fixed';
                mask.style.top = '0';
                mask.style.right = '0';
                mask.style.bottom = '0';
                mask.style.left = '0';
                mask.style.opacity = '';
                mask.style.display = 'none';
                mask.style.background = 'rgba(0,0,0,.3)';
                mask.style.display = 'block';
                document.body.appendChild(mask);
            }
            return mask
        }
    }
})()
/**
 * 创建窗口
 * @type {{getInstance}}
 */
let createLogin = (function () {
   let login
   function createInstance() {

   }
   return {
       getInstance:function(){
           if(!login){
               login = document.createElement('div');
               // 设置样式
               login.style.position = 'fixed';
               login.style.top = '50%';
               login.style.left = '50%';
               login.style.zIndex = '100';
               login.style.display = 'none';
               login.style.padding = '50px 80px';
               login.style.backgroundColor = '#fff';
               login.style.border = '1px solid #ccc';
               login.style.borderRadius = '6px';
               login.innerHTML = 'login it';
               document.body.appendChild(login);
           }
           return login
       }
   }
})()
document.getElementById('btn').onclick = function() {
    var oMask = createMask.getInstance();
    oMask.style.display = 'block';
    var oLogin = createLogin.getInstance();
    oLogin.style.display = 'block';
    var w = parseInt(oLogin.clientWidth);
    var h = parseInt(oLogin.clientHeight);
}

