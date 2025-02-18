// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:


function range(start,end){
if(start>end||start<0||end<0) return []
else{
    const numbers = range(start,end-1)

    numbers.push(end)
    return numbers
}


}
console.log(range(1,5))
// console.log(range(1,100))