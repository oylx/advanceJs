function Human(options){
    this.name=options.name;
    this.age = options.age;
}
Human.prototype.吃=function () {}

function Solider(options){
    Human.call(this,options);
    this.战斗力=options.战斗力;
    this.id = options.id;
}
Solider.prototype = Object.create(Human.prototype)
Solider.prototype.兵种='美国大兵';
Solider.prototype.攻击=function () {}


var solider = new Solider({name:'oylx',age:28,战斗力:100,id:20});
console.dir(solider)



// function Human(){
//     this.name='xxx';
//     this.肤色='yyy';
// }
// Human.prototype.吃=function(){}
// Human.prototype.喝=function(){}
// function Solider(){
//     Human.call(this);
//     this.战斗力=1;
//     this.id=10;
// }

// function fakeHuman(){}
// fakeHuman.prototype = Human.prototype;
// Solider.prototype = new fakeHuman();

// Solider.prototype.防御=function(){}
// // Solider.prototype.__proto__=Human.prototype;//不能用
// Solider.prototype = Object.create()
// var solider = new Solider();
// console.dir(solider)

// function Human理论(){
//     // this = {};
//     // this.__proto__=Human理论.prototype;
//     // return this
// }
// // Solider.prototype.__proto__ = Human理论.prototype;
// // Solider.prototype =new Human理论()