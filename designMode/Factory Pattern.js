// 工厂模式是一种 创建模式，用来解决创建对象的问题。
// 根据参数类型，通过调用工厂方法来创建不同类型的对象。
//
// 适用场景
// 对象的构建十分复杂
// 根据不同的条件创建不同的对象
// 处理大量具有相同属性的小对象
const Dom = {
    create:  function(type, url) {
        return new this.types[type]
    },
    types: {
        text: function() {
            this.node = document.createTextNode('')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setText = function(text) {
                this.node.data = text
                return this
            }
        },
        image: function() {
            this.node = document.createElement('img')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setSrc = function(src) {
                this.node.src = src
                return this
            }
            this.setSize = function(width, height) {
                this.node.style.width = width + 'px'
                this.node.style.height = height + 'px'
                return this
            }
        },
        link: function() {
            this.node = document.createElement('a')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setHref = function(href){
                this.node.href = href
                return this
            }
            this.setText = function(text) {
                this.node.appendChild(document.createTextNode(text))
                return this
            }
        }
    }
}

Dom.create('text').setText('https://jirengu.com').appendTo(document.body)
Dom.create('link').setHref('https://jirengu.com').setText('饥人谷').appendTo(document.body)
Dom.create('image').setSrc( 'http://cdn.jirengu.com/book.jirengu.com/img/11.jpg').setSize(30, 30).appendTo(document.body)