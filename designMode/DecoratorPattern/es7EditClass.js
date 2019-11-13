const logWrapper = targetClass => {
  let orignRender = targetClass.prototype.render
  targetClass.prototype.render = function(){
    console.log("before render")
    orignRender.apply(this)
    console.log("after render")
  }
  return targetClass
}

@logWrapper
class App {
  constructor() {
    this.title = 'oylx'
  }
  render(){
    console.log('渲染页面:' + this.title);
  }
}
new App().render()
