class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    print(){
        let temp=this.top
        while(temp!==null){
            console.log(temp.value)
            temp=temp.next
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.top) {
            return null
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

const myStack=new Stack(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.pop()
myStack.print()