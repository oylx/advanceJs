function Toast(node, animation) {
    this.node = node
    this.animation = animation
}
Toast.prototype.show = function() {
    this.animation.show(this.node)
}
Toast.prototype.hide = function() {
    this.animation.hide(this.node)
}

function Message(node, animation) {
    this.node = node
    this.animation = animation
}
Message.prototype.show = function() {
    this.animation.show(this.node)
}
Message.prototype.hide = function() {
    this.animation.hide(this.node)
}

const Animations = {
    bounce: {
        show: function(node) { console.log(node + '弹跳着出现') },
        hide: function(node) { console.log(node + '弹跳着消失') }
    },
    slide: {
        show: function(node) { console.log(node + '滑着出现') },
        hide: function(node) { console.log(node + '滑着消失') }
    }
}

let toast = new Toast('toast', Animations.bounce )
toast.show()

let messageBox = new Message('messageBox', Animations.slide)
messageBox.hide()