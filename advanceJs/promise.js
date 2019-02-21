function Promise(fn){
    var status='pending';
    function successNotify(){
        status = 'success';
        toDoThen.apply(undefined,arguments)
    }
    function failNotofy(){
        status ='fail';
        toDoThen.apply(undefined,arguments)
    }
    function toDoThen(){
        setTimeout(()=>{
            if(status==='success'){
                successArray.forEach(val=>{
                    val.apply(undefined,arguments)
                })
            }else if(status==='fail'){
                failArray.forEach(val=>{
                    val.apply(undefined,arguments)
                })
            }
        },0)
    }
    var successArray =[],failArray=[];
    fn.call(undefined, successNotify,failNotofy);
    this.then = function(successFn,failFn){
        successArray.push(successFn);
        failArray.push(failFn);
        return undefined
    }
}

var promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(101)
    },1000)
})
promise.then((res)=>{
    console.log(res)
})