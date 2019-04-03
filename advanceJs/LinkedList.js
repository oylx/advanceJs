function Node(element) {
    this.element = element;
    this.next = null;
}
class LList{
    constructor(options){
        this.head = new Node('head');
    }
    find(item){
        let currNode =this.head;
        while(currNode.element !== item){
            currNode = currNode.next
        }
        return currNode
    }
    insert(newElement, item){//在item后面插
        let newNode = new Node(newElement)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    print(element){
        console.log(element)
    }
    display(){
        let currentNode = this.head
        while(currentNode.next!==null){
            this.print(currentNode.next.element)
            currentNode = currentNode.next
        }
    }
}
let linklist1 = new LList();

linklist1.insert('first','head')
linklist1.insert('second','first')
var x =linklist1.find('first')
console.log(x)
linklist1.display()