//reverse string

function reverseString(str){
    let reverse=""
    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i]
    }
    return reverse
}

// let str="aditya"
// console.log(reverseString(str))


//check pallindrome


function isPalindrome(str){
    let i=0; 
    let j=str.length-1

    while(i<j){
        if(str[i] !== str[j]){
            return false
        }
        i++
        j--
    }
    return true
}

// let str = "madam"
// let res=isPalindrome(str)
// console.log(res)

//check Annagram

function checkAnagram(s,t){
    if(s.length !== t.length)return false
    const map={}

    for(let char of s){
        map[char]=(map[char] || 0 )+1
    }

    for(let char of t){
        if(!map[char])return false
        map[char]--
    }
    return true
}

let res=checkAnagram('listen','silent')
console.log(res)