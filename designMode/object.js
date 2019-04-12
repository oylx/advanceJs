var Book = function() {
    var title
    function checkTitle(title) {
        return title.length > 2 && title.length < 20
    }
    this.setTitle =  function(newTitle) {
        if(!checkTitle(newTitle)) return
        title = newTitle
    }
    this.display = function() {
        console.log('Book title is ' + title)
    }
}
Book.prototype.other = function() {
    console.log(title)
}
var myBook = new Book()
myBook.setTitle('设计模式by饥人谷')
myBook.display()
myBook.other()

var Book = (function() {
    //私有的静态变量，只有一份
    var numOfBooks = 0
    //私有的静态方法，只有一份
    function checkTitle(title) {
        return title.length > 2 && title.length < 20
    }
    return function() {
        var title
        numOfBooks++
        if(numOfBooks > 10)  throw new Error('最多只能创建10本书')
        this.setTitle =  function(newTitle) {
            if(!checkTitle(newTitle)) return
            title = newTitle
        }
        this.display = function() {
            console.log('Book title is ' + title)
        }
    }
})()
//公开的静态方法
Book.convertToTitlecase = function(str) {}
//公开的实例方法
Book.prototype = {
    other: function(){}
}