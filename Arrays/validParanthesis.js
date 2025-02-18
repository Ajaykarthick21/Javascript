// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

function isValid(s){
    
const map = {
    "}":"{",
    "]":"[",
    ")":"("
}

let bracket = []
for(const key of s){
    if(key === "["||key ==="{"||key==="("){
        bracket.push(key)
    }
    else{
        if(bracket.length===0||bracket.pop()!==map[key]){ 
            return false
            
        }
    }   
}
return bracket.length === 0
}
// Test Cases
console.log(isValid("()"));        // true
console.log(isValid("[]{})"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("{[()]}"));    // true
console.log(isValid("({[)]}"));    // false
console.log(isValid(""));          // true (empty string is valid)