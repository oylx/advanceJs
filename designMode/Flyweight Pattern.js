// 享元模式（英语：Flyweight Pattern）是一种软件设计模式。它使用共享物件,用来尽可能减少内存使用量以及分享资讯给尽可能多的相似物件；它适合用于当大量物件只是重复因而导致无法令人接受的使用大量内存。通常物件中的部分状态是可以分享。常见做法是把它们放在外部数据结构,当需要使用时再将它们传递给享元。

// 享元模式适合
// 大量对象很消耗内存
// 对象里面一些东西是重复的
// 所以以后一提到“大量”、“内存”这种字眼,首先想到的优化方案就是享元模式

// 先看看是不是符合享元模式的特征
// 抽离出最小的享元
// 用工厂模式（类单例模式）拿出复用的享元
// 对大量重复对象,内部使用享元

class Phone {
    constructor( band ) {
        this.band = band
    }
    call() {
        console.log('I use' + this.band + ' to call')
    }
}

const PhoneRenter = (function(){
    let phones = {}
    return {
        getPhone: function(band) {
            if(!phones[band]) {
                phones[band] = new Phone(band)
            }
            return phones[band]
        }
    }
})()

class People{
    constructor(name, band) {
        this.name = name
        this.phone = PhoneRenter.getPhone(band)
    }
    call() {
        console.log('I am ' + this.name)
        this.phone.call()
    }
}

let p1 = new  People('A', 'XiaoMi')
let p2 = new  People('B', 'XiaoMi')
let p3 = new  People('C', 'Apple')
let p4 = new  People('D', 'XiaoMI')
p1.call()
p2.call()
p3.call()
p4.call()


