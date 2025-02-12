// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false


function palindrome(string){
    const reverse = string.toString().split('').reverse().join('')
    if(string === reverse) return true  
    return false
}

console.log(palindrome(121))
console.log(palindrome(10))