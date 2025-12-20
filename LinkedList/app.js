class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    print() {
        let temp = this.head
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        let temp = this.head
        let prev = this.head

        while (temp.next !== null) {
            prev = temp
            temp = temp.next
        }

        this.tail = prev
        this.tail.next = null

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
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        let temp = this.head
        this.head = this.head.next
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
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        const newNode = new Node(value)
        let prev = this.get(index - 1)
        let curr = prev.next

        prev.next = newNode
        newNode.next = curr

        this.length++
        return this

    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()

        let temp = this.get(index - 1)
        let curr=temp.next

        temp.next=temp.next.next
        curr.next=null

        this.length--
        return curr
    }

    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp

        let next=temp.next
        let prev=null

        while(temp !== null){
            next=temp.next
            temp.next=prev

            prev=temp
            temp=next
        }
        return this
    }
}

const myLinkedList=new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(6)
myLinkedList.push(7)
myLinkedList.pop()
myLinkedList.unshift(100)
myLinkedList.shift()
let res=myLinkedList.get(3)
console.log(res)
myLinkedList.set(3,300)
myLinkedList.insert(4,400)
myLinkedList.remove(4)
myLinkedList.reverse()
myLinkedList.print()