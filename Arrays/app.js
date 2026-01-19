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



//find missing number
function findMissing(arr){
    let n=arr.length+1

    let totalSum=(n*(n+1))/2

    let arrSum=arr.reduce((a,b)=>a+b);

    return totalSum-arrSum
}

// let arr=[1,2,4,5]
// let res=findMissing(arr)
// console.log(res)


//merge intervals

function merge(arr){
    arr.sort((a,b)=>a[0]-b[0])

    let merged=[arr[0]]

    for(let i=1; i<arr.length; i++){
        let prev=merged[merged.length-1]
        let curr=arr[i]

        if(prev[1]>=curr[0]){
            prev[1]=Math.max(prev[1],curr[1])
        }else{
            merged.push(curr)
        }
    }
    return merged
}

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))



//longest subarray sum

function subArraySum(arr){
    let maxSum=arr[0]
    let currSum=0;

    for(let num of arr){
        if(currSum<0)currSum=0
        currSum+=num
        maxSum=Math.max(currSum,maxSum)
    }
    return maxSum
}

// console.log(subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))




// . Product of Array Except Self
let arr=[1,2,3,4]
let res=[]
for(let i=0; i<arr.length; i++){
    let a=1;
    for(let j=0; j<arr.length; j++){
        if(i!==j){
            a*=arr[j]
        }
    }
    res.push(a)
}
// console.log(res)
