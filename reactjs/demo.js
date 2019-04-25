// let number =0;
// // let h=React.createElement;
// //
// // let onclick = ()=>{
// //     number+=1;
// //     render();
// // };
// // let onclick2 = ()=>{
// //     console.log(1)
// //     number-=1;
// //     render();
// // };
// // render();
// // function render(){
// //
// //     ReactDOM.render(
// //         <div>
// //     <span className="red">{number}</span>
// //         <button onclick={onclickButton2}>-----</button>
// //         </div>,document.getElementById('root'));
// //
// //     // let div =h('div',{},h('span',{className:'red'},number),h('button',{onclick:onclick},'+'),h('button',{onclick:onclick2},'-'));
// //     // ReactDOM.render(div,document.getElementById('root'));
// // }

class Person{
    constructor(props){
        constructor(props){
            super(props)
            this.state ={
                name:props.name,
                age:props.age
            }
        }
        render(){
            return (
                <div>
                <span>名字：</span>{this.state.name}
            <span>年龄:</span>{this.state.age}
            </div>
        )
        }
    }
    function render(){
    ReactDOm.render(
    <Person name="oylx" age="18"></Person>,
    document.querySelector('#root')
)
}
    render()