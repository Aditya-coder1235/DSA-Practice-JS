class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(value){
        const newNode=new Node(value)
        this.first=newNode
        this.last=newNode
        this.length=1
    }

    print(){
        let temp=this.first

        while(temp){
            console.log(temp.value)
            temp=temp.next
        }
    }

    enqueue(value){
        const newNode=new Node(value)
        if(this.length===0){
            this.first=newNode
            this.last=newNode
        }else{
            this.last.next=newNode
            this.last=newNode
        }
        this.length++
        return this
    }

    dequeue(){
        if(this.length===0)return undefined
        if(this.length===1){
            this.first=null
            this.last=null
        }
        let temp=this.first
        this.first=this.first.next
        temp.next=null

        this.length--
        return temp
    }
}

const myQueue=new Queue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.dequeue()
myQueue.print()