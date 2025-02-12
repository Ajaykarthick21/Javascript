// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach

function validAnagram(s,t){


    if(s.length!==t.length) return false 

    return s.split('').sort().join('') === t.split('').sort().join('')

}

console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('ajay','jaya'))
console.log(validAnagram('rat','cat'))