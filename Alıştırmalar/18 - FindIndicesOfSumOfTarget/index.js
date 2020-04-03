/*
Problem: Write a JavaScript program to find a pair of elements (indices of the two numbers) 
from an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3

*/

const checkTargetEqualsSumOfIndices = (array,target) => {
    let didFind = false;
    for(let i =0;i<array.length;i++) {
        if(array[i] === target){
            console.log(i);
            didFind = true;
        }
        for(let j = i+1;j<array.length;j++) {
            if(array[i] + array[j] === target) {
                console.log(i,j);
                didFind=true;
            }
        }
    }
    if(!didFind) return console.log("couldn't find a pairs");   
}

checkTargetEqualsSumOfIndices([10,20,10,40,50,60,70],120)