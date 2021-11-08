class Human {
  constructor(options) {
    this.name = options.name
    this.age = options.age
  }
  eat () { }
  drink () { }
  poon () { }
}
class Solider extends Human {
  constructor(options) {
    super(options)
    this.战斗力 = options.战斗力
    this.id = options.id
    this.兵种 = "美国大兵" //公有属性不能以非函数形势存在，只能放在私有属性种
  }
  攻击 () { }
}

var solider = new Solider({ name: "oylx", age: 28, 战斗力: 100, id: 20 })
console.dir(solider)

class Animal {
  constructor() {
    this._type = "dog"
  }
  static eat () {
    console.log("eat")
  }
  get type () {
    return this._type
  }
  set type (val) {
    this._type = val
  }
}

class Parent {
  constructor(firstName, lastName, data) {
    this.firstName = firstName
    this.lastName = lastName
    this.data = data
  }

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

class Child extends Parent {
  constructor(firstName, lastName, age) {
    super(firstName, lastName)
    this.age = age
  }

  fullName () {
    return `${super.fullName()} (${this.age})`
  }
}

let child = new Child('a', 'b', 'c')
for (let key in child) {
  console.log(key, ':', child[key]);
}
console.log(Object.keys(child));

