var array = [1,5,2,3,4,2,3,1,3,4];
function unique(arr){
    var obj = {};
    for(var i =0;i<arr.length;i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 0;
        }else{
            arr.splice(i,1);
            i--;
        }
    }
}
unique(array)
console.log(array)

function merge(arr) {
    if (!Array.isArray(arr) || arr.length == 0) return [];
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {//判断第一次出现的位置
            result.push(arr[i]);
        }
    }

    return result;
}

var a  = merge(array)
console.log(a)

let b = ()=>{
    console.log(1)
}
b.prototype.fnx = function () {
    console.log(1)
}
console.dir(b)