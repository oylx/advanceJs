class Human{
    constructor(options){
        this.name=options.name;
        this.age = options.age;
    }
    eat(){}
    drink(){}
    poon(){}
}
class Solider extends Human{
    constructor(options){
        super(options)
        this.战斗力=options.战斗力;
        this.id = options.id;
        this.兵种 = '美国大兵';//公有属性不能以非函数形势存在，只能放在私有属性种
    }
    攻击(){}
    
}

var solider = new Solider({name:'oylx',age:28,战斗力:100,id:20});
console.dir(solider)