{
  // 1.借用构造函数
  // 为解决原型链中上述两个问题, 我们开始使用一种叫做借用构造函数(constructor stealing)的技术(也叫经典继承).
  // 基本思想:即在子类型构造函数的内部调用超类型构造函数.
  // 特点:1.保证了原型链中引用类型值的独立,不再被所有实例共享;2.子类型创建时也能够向父类型传递参数.
  function Father () {
    this.colors = ["red", "blue", "green"];
  }
  function Son () {
    Father.call(this);//继承了Father,且向父类型传递参数
  }
  var instance1 = new Son();
  instance1.colors.push("black");
  console.log(instance1.colors);//"red,blue,green,black"

  var instance2 = new Son();
  console.log(instance2.colors);//"red,blue,green" 可见引用类型值是独立的
}

{
  // 2.组合继承
  // 组合继承, 有时候也叫做伪经典继承, 指的是将原型链和借用构造函数的技术组合到一块, 从而发挥两者之长的一种继承模式.
  // 基本思路: 使用原型链实现对父类原型属性和方法的继承, 通过借用构造函数来实现对实例属性的继承.
  // 特点:组合继承避免了原型链和借用构造函数的缺陷,融合了它们的优点,成为 JavaScript 中最常用的继承模式. 而且, instanceof 和 isPrototypeOf( )也能用于识别基于组合继承创建的对象.
  // 同时我们还注意到组合继承其实调用了两次父类构造函数, 造成了不必要的消耗
  function Father (name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  Father.prototype.sayName = function () {
    alert(this.name);
  };
  function Son (name, age) {
    Father.call(this, name);//继承实例属性，第一次调用Father()
    this.age = age;
  }
  Son.prototype = new Father();//继承父类方法,第二次调用Father()
  Son.prototype.sayAge = function () {
    alert(this.age);
  }
  var instance1 = new Son("louis", 5);
  instance1.colors.push("black");
  console.log(instance1.colors);//"red,blue,green,black"
  instance1.sayName();//louis
  instance1.sayAge();//5

  var instance1 = new Son("zhai", 10);
  console.log(instance1.colors);//"red,blue,green"
  instance1.sayName();//zhai
  instance1.sayAge();//10

}

{
  // 3.原型继承 Object.create()
  // 实现思路在object()函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.
  // 特点:原型式继承中, 包含引用类型值的属性始终都会共享相应的值, 就像使用原型模式一样.

  // object模拟Object.create()写的思路
  function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
  }
  var person = {
    friends: ["Van", "Louis", "Nick"],
  };
  var anotherPerson = Object.create(person);
  anotherPerson.friends.push("Rob");
  console.log(anotherPerson.friends);
  var yetAnotherPerson = Object.create(person);
  yetAnotherPerson.friends.push("Style");
  console.log(yetAnotherPerson.friends);
  console.log(person.friends);

  var person = { name: "Van" };
  // 规避地址引用
  var anotherPerson = Object.create(person, {
    name: {
      value: "Louis",
    },
  });
  console.log(person.name, anotherPerson.name); // Van Louis

}

{
  // 4.寄生式继承
  // 寄生式继承的思路与(寄生)构造函数和工厂模式类似, 即创建一个仅用于封装继承过程的函数,该函数在内部以某种方式来增强对象,最后再像真的是它做了所有工作一样返回对象.
  // function object (o) {
  //   function F () { }
  //   F.prototype = o;
  //   return new F();
  // }
  function createAnother (original) {
    var clone = Object.create(original);//通过调用object函数创建一个新对象
    clone.sayHi = function () {//以某种方式来增强这个对象
      console.log(this.friends);
    };
    return clone;//返回这个对象
  }
  var person = {
    friends: ["Van", "Louis", "Nick"],
  };
  var a = createAnother(person)
  a.friends.push('a') // ['Van', 'Louis', 'Nick', 'a']
  a.sayHi()
  var b = createAnother(person) // ['Van', 'Louis', 'Nick', 'a', 'b']
  b.friends.push('b')
  b.sayHi()


}

{
  // 5.寄生组合式继承
  // 组合继承是 JavaScript 最常用的继承模式; 不过, 它也有自己的不足. 
  // 组合继承最大的问题就是无论什么情况下,都会调用两次父类构造函数: 一次是在创建子类型原型的时候, 另一次是在子类型构造函数内部. 
  // 寄生组合式继承就是为了降低调用父类构造函数的开销而出现的

  function extend (subClass, superClass) {
    var prototype = Object.create(superClass.prototype);//创建对象
    prototype.constructor = subClass;//增强对象
    subClass.prototype = prototype;//指定对象
  }

  function extend (subClass, superClass) {
    var F = function () { };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
      superClass.prototype.constructor = superClass;
    }
  }



}
