// 为一组复杂的子系统接口提供一个更高级的统一接口,通过这个接口使得对子系统接口的访问更容易。
class Carousel {
    constructor() {
        console.log('初始化轮播')
    }
    start() {
        console.log('轮播开始启动')
    }
}

class Tab {
    constructor() {
        console.log('初始化Tab')
    }
    start() {
        console.log('Tab开始启动')
    }
}

/*
let carousel = new Carousel()
let tab = new Tab()
carousel.start()
tab.start()
*/


class App {
    constructor() {
        this.carousel = new Carousel()
        this.tab = new Tab()
    }
    start() {
        this.carousel.start()
        this.tab.start()
    }
}

let app = new App()
app.start()
