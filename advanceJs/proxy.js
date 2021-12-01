{
    let onWatch = (obj, getLogger, setBind) => {
        let handler = {
            get (target, property, receiver) {
                getLogger(target, property)
                return Reflect.get(target, property, receiver)
            },
            set (target, property, value, receiver) {
                setBind(value, property)
                return Reflect.set(target, property, value)
            }
        }
        return new Proxy(obj, handler)
    }

    let obj = { a: 1 }
    let p = onWatch(
        obj,
        (target, property) => {
            if (property in target) {
                console.log(`'${property}' = ${target[property]}`)
            } else {
                throw new ReferenceError("Property \"" + property + "\" does not exist.")
            }
        },
        (v, property) => {
            console.log(`监听到属性${property}改变为${v}`)
        }
    )
    p.a = 2 // 监听到属性a改变
    p.c // 'a' = 2

    var myObject = {
        foo: 1,
        bar: 2,
        get baz () {
            return this.foo + this.bar
        }
    }
    var myReceiver = {
        foo: 3,
        bar: 3
    }
    Reflect.get(myObject, 'baz', myReceiver)
    var x = myReceiver.baz()
}



{
    const target = {
        _id: '1024',
        name: 'vuejs'
    }

    const validators = {
        name (val) {
            return typeof val === 'string';
        },
        _id (val) {
            return typeof val === 'number' && val > 1024;
        }
    }

    const createValidator = (target, validator) => {
        return new Proxy(target, {
            _validator: validator,
            set (target, propkey, value, proxy) {
                let validator = this._validator[propkey](value)
                if (validator) {
                    return Reflect.set(target, propkey, value, proxy)
                } else {
                    throw Error(`Cannot set ${propkey} to ${value}. Invalid type.`)
                }
            }
        })
    }

    const proxy = createValidator(target, validators)

    proxy.name = 'vue-js.com' // vue-js.com
    proxy.name = 10086 // Uncaught Error: Cannot set name to 10086. Invalid type.
    proxy._id = 1025 // 1025
    proxy._id = 22  // Uncaught Error: Cannot set _id to 22. Invalid type 
}