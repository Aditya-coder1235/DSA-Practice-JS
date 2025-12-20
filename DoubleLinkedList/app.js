class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    print(){
        let temp=this.head
        while(temp!==null){
            console.log(temp.value)
            temp=temp.next
        }
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        let temp = this.tail
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null

        this.length--
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        let temp = this.head
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        this.head = this.head.next
        this.head.prev = null
        temp.next = null

        this.length--
        return temp
    }

    get(index) {
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
        }
    }

    insert(index, value) {
        const newNode = new Node(value)
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return undefined

        let prev=this.get(index-1)
        let curr=prev.next

        prev.next=newNode
        newNode.prev=prev

        newNode.next=curr
        curr.prev=newNode

        this.length++
        return this
    }

    remove(index){
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index > this.length) return undefined

        let prev = this.get(index - 1)
        let curr = prev.next

        prev.next=prev.next.next
        curr.next.prev=prev

        curr.next=null
        curr.prev=null

        this.length--
        return curr
    }

    reverse(){
        let curr=this.head
        let temp=null

        while(curr !== null){
            temp=curr.prev
            curr.prev=curr.next
            curr.next=temp

            curr=curr.prev
        }

        if(temp !== null){
            this.head=temp.prev
        }

        return this
    }
}

const myDLL=new DoubleLinkedList(1)
myDLL.push(2)
myDLL.push(3)
myDLL.push(4)
myDLL.push(5)
myDLL.push(6)
myDLL.pop()
myDLL.unshift(100)
myDLL.shift()
let res=myDLL.get(2)
console.log(res);
myDLL.insert(2,200)
myDLL.remove(2)
myDLL.reverse()
myDLL.print()