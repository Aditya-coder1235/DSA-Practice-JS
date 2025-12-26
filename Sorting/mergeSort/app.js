let arr=[5,9,1,4,2,6,8,3,7]


function merge(arr1,arr2){
    let combined=[]
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            combined.push(arr1[i])
            i++
        }else{
            combined.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        combined.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        combined.push(arr2[j])
        j++
    }

    return combined
}

function mergeSort(arr){
    if(arr.length===1)return arr

    let midIndex=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,midIndex))
    let right=mergeSort(arr.slice(midIndex))


    return merge(left,right)
}

const res=mergeSort(arr)
console.log(res)