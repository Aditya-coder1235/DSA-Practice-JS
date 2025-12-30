//find largest
function findLargest(arr){
    let max=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
// let arr=[1,2,3,4,5]
// console.log(findLargest(arr))


//remove duplicates
function removeDuplicate(arr){
    let unique=[]
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}
// let arr=[1,2,2,3,4,4]
// console.log(removeDuplicate(arr))


//isPrime
function isPrime(n){
    if(n<=1)return false
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0)return false
    }
    return true
}
// console.log(isPrime(12))


//linear search
function linearSearch(arr,n){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===n){
            return i
        }
    }
    return -1
}
// console.log(linearSearch([10,20,30,40],20))


//binary search
function binarySearch(arr,n){
    let i=0;
    let j=arr.length

    while(i<=j){
        let mid=Math.floor((i+j)/2);

        if(arr[mid]===n)return mid
        else if(arr[mid]>n){
            j=mid-1
        }else{
            i=mid+1
        }
    }
    return -1
}
// console.log(binarySearch([10,20,30,40,50],40))

