let arr = [1,2,3,4,5,6]
// let arr1= Math.max.call(...arr)
function f() {
    var a = [...arguments]
    console.log(a)
    // return [].slice.call(arguments)
    // return Math.max.call(...arguments)
}
// f(arr)
// console.log(f(arr))

console.log(arr.length>>1)