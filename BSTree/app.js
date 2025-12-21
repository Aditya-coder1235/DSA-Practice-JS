class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BSTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let temp = this.root
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        while (true) {
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                } else {
                    temp = temp.right
                }
            }
        }
    }

    contains(value){
        if(!this.root)return undefined
        let temp=this.root

        while(temp !== null){
            if(value===temp.value)return true
            if(value<temp.value){
                temp=temp.left
            }else{
                temp=temp.right
            }
        }
        return false
    }
}

const myBSTree=new BSTree()
myBSTree.insert(50)
myBSTree.insert(80)
myBSTree.insert(30)
myBSTree.insert(90)
myBSTree.insert(60)
myBSTree.insert(40)
myBSTree.insert(10)
let res=myBSTree.contains(12)
console.log(res)
console.log(myBSTree)