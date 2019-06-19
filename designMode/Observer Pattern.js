// 一个典型的观察者模式应用场景是用户在一个网站订阅主题
//
// 多个用户(观察者，Observer)都可以订阅某个主题(Subject)
// 当主题内容更新时订阅该主题的用户都能收到通知
function Subject() {
    this.observers = []
}
Subject.prototype.addObserver = function(observer) {
    this.observers.push(observer)
}
Subject.prototype.removeObserver = function(observer) {
    var index = this.observers.indexOf(observer)
    if(index > -1){
        this.observers.splice(index, 1)
    }
}
Subject.prototype.notify = function() {
    this.observers.forEach(function(observer){
        observer.update()
    })
}

function Observer(name) {
    this.name = name
    this.update = function(){
        console.log(name + ' update...')
    }
}

// 创建主题
var subject = new Subject()

//创建观察者1
var observer1 = new Observer('hunger')
//主题添加观察者1
subject.addObserver(observer1)
//创建观察者2
var observer2 = new Observer('valley')
//主题添加观察者2
subject.addObserver(observer2)

//主题通知所有的观察者更新
subject.notify()