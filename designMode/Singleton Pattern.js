// 单例模式旨在保证当前类仅有一个实例，并提供一个全局的访问点
/**
 * 惰性单例模式
 * Singleton.getInstance实现了在需要的时候创建单例
 * @type {{getInstance}}
 */
const Singleton  =(function () {
   let instance;
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
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();


class SingleDog {
    show() {
        console.log('我是一个单例对象');
    }
    static getInstance() {
        if(!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }

}

/**
 * 创建遮罩层
 * @type {{getInstance}}
 */
const createMask = (function () {
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
})();
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
})();
document.getElementById('btn').onclick = function() {
    const oMask = createMask.getInstance();
    oMask.style.display = 'block';
    const oLogin = createLogin.getInstance();
    oLogin.style.display = 'block';
    const w = parseInt(oLogin.clientWidth);
    const h = parseInt(oLogin.clientHeight);
};


class Storage {
    static getInsatance () {
        if(!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance
    }
    getItem (key) {
        return localStorage.getItem(key)
    }
    setItem (key, value) {
        return localStorage.setItem(key,value)
    }
}
const storage1 = Storage.getInsatance();
const storage2 = Storage.getInsatance();
storage1.setItem('name','xiaoqi');
storage1.getItem('name');
storage2.getItem('name');
