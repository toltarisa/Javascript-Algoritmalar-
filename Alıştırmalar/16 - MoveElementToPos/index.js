/* 
Problem:

38. Write a JavaScript function to move an array element from one position to another. Go to the editor

Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]
*/

const move = (array,from,to) => {
    if(!array[from] || !array[to]) {
        console.log("There is no such index")
    }
    const pickedFrom = array.splice(from,1);
    array.splice(to,0,pickedFrom[0]);
}

//move([1,2,3,4,5,6,7,8,1,0],-1,3); // "There no such index"
move([1,2,3,4,5,6,7,8,1,0],4,7);