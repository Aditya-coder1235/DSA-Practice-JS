let arr = [5,9,1,4,2,7,3]


// Bubble Sort

function bubbleSort(arr){
    for(let i=arr.length-1; i>0; i--){
        for(let j=0; j<i; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}


//selection Sort

function selectionSort(arr){
    let min
    for(let i=0; i<arr.length-1; i++){
         min=i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min !== i){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min] =temp
        }
    }
    return arr
}

// let res=selectionSort(arr)
// console.log(res)



//Insertion Sort

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let key=arr[i]
        let j=i-1

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    return arr
}

const res=insertionSort(arr)
console.log(res)