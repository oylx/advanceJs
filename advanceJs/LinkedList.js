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
    remove (element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    append (element){
        let node = new Node(element),
            current;
        if (head === null){
            head = node;
            tail = node; //NEW
        } else {
            //NEW
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        length++;
    };
}
let linklist1 = new LList();

linklist1.insert('first','head')
linklist1.insert('second','first')
// linklist1.display()
console.log(linklist1)
var x =linklist1.find('first')
console.log(x)