// function a() {  
//     setTimeout( function(){  
//       console.log(1)  
//     }, 1000); 
//     setTimeout( function(){  
//       console.log(2)  
//     }, 0);  
//     console.log(3);  
//   }  
//   a();

//   function b(){
//       console.log(this)
//   }
//   b.call()

// 要求不使用 class，完成如下需求：

// 写出一个构造函数 Animal
// 输入为空
// 输出为一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
// 再写出一个构造函数 Human
// Human 继承 Animal
// 输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
// 输出为一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种（人类）、行动和使用工具
// 在写出一个构造函数 Asian
// Asian 继承 Human
// 输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
// 输出为一个新对象，改对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色
// 既

// 最后一个新对象是 Asian 构造出来的
// Asian 继承 Human，Human 继承 Animal



/**
 * Animal @param{}
 */
function Animal(){}
Animal.prototype.行动=function(){}

function Human(options){
  Animal.call(this,options);
  this.name = options.name;
  this.birthday = options.birthday;
}
Human.prototype=Object.create(Animal.prototype)
Human.prototype.物种="人类";
Human.prototype.实用工具=function(){}

function Asian(options){
  Human.call(this,options)
  this.city = options.city;
}
Asian.prototype = Object.create(Human.prototype)
Asian.prototype.肤色='yellow'

var asian = new Asian({city: '北京', name: 'Frank', birthday: '2000-10-10' });
console.log(asian)

class Animal{
  constructor(){}
  行动(){}
}
class Human extends Animal{
  constructor(options){
    super(options);
    this.name = options.name;
    this.birthday = options.birthday;
    this.物种="人类";
  }
  实用工具(){}
}

class Asian extends Human{
  constructor(options){
    super(options);
    this.city = options.city;
    this.肤色='yellow'
  }
}
var asian = new Asian({city: '北京', name: 'Frank', birthday: '2000-10-10' });
console.log(asian)




