/*
Problem: Write a JavaScript function to merge two arrays and removes all duplicates elements. 

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]
*/

const mergeTwoArrayAndRemoveDuplicates = (array1,array2) => {
    const mergedArray = array1.concat(array2);
    let uniqueValues = {};
    mergedArray.forEach(element => {
        uniqueValues[element] = uniqueValues[element] === null;

    });
    
    const mergedAndFilteredArray = Object.keys(uniqueValues).map(element => parseInt(element,10))
    console.log(mergedAndFilteredArray);
    
}

mergeTwoArrayAndRemoveDuplicates([12,3,5,1],[5,15,9])