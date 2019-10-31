/*
    Problem : Bir dizi icerisindeki tekrar eden degerleri silmek

    // Örnek : ['Ahmet','Mehmet','Samet','Ali','Samet'] ----> ['Ahmet','Mehmet','Samet','Ali']
*/

removeDuplicates = arr => {
  let uniqueValues = {};

  arr.forEach(element => {
    uniqueValues[element] = uniqueValues[element] === null;
  });

  return Object.keys(uniqueValues);
};

module.exports = removeDuplicates;
