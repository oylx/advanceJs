function makeIterator(array) {
    var nextIndex =0;
    return {
        next:function () {
            return nextIndex<array.length?{value:array[nextIndex+1],done:false}:{value:undefined,done:true}
        }
    }
}