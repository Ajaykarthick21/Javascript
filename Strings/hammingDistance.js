// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑


function hammingDistance(x,y){


     x = x.toString(2)
     y = y.toString(2)
    if(x.length < y.length) {
        while(x.length!=y.length) x = "0" + x
    }else{
         while(x.length!=y.length) y = "0" + y
    }
        let distance = 0 
        for(let i = 0 ;i<x.length;i++){
            if(x[i]!==y[i]) distance++
        }
        return distance
}


console.log(hammingDistance(1,4))


