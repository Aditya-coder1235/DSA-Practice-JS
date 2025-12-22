class Heap {
    #heap = []

    #getLeftChild(index) {
        return index * 2 + 1
    }

    #getRightChild(index){
        return index * 2 + 2
    }

    #getParent(index){
        return Math.floor((index-1)/2)
    }

    #swap(index1,index2){
         [this.#heap[index1],this.#heap[index2]]=[this.#heap[index2],this.#heap[index1]]
    }

    print(){
        console.log(this.#heap)
    }

    insert(value){
        this.#heap.push(value)
        let current=this.#heap.length-1;

        while(current>0 && this.#heap[current]>this.#heap[this.#getParent(current)]){
            this.#swap(current,this.#getParent(current))
            current=this.#getParent(current)
        }
        return true
    }

    remove(){
        if(this.#heap.length===0)return null
        if(this.#heap.length===1){
            this.#heap.pop()
            return true
        }
        let maxIndex=this.#heap[0]
        this.#heap[0]=this.#heap.pop()

        this.#shrinkDown(0)

        return maxIndex
    }

    #shrinkDown(index){
        let maxIndex=index
        let size=this.#heap.length


        while(true){
            let leftIndex=this.#getLeftChild(index)
            let rightIndex=this.#getRightChild(index)

            if(leftIndex<size && this.#heap[leftIndex]>this.#heap[maxIndex]){
                maxIndex=leftIndex
            }

            if(rightIndex<size && this.#heap[rightIndex]>this.#heap[maxIndex]){
                maxIndex=rightIndex
            }

            if(maxIndex!==index){
                this.#swap(maxIndex,index)
                index=maxIndex
            }else{
                return 
            }
        }
    }
}


const myHeap=new Heap()
myHeap.insert(50)
myHeap.insert(99)
myHeap.insert(40)
myHeap.insert(20)
myHeap.insert(90)
myHeap.print()