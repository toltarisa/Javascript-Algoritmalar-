/*
    Problem : Bir dizi icerisindeki tekrar eden degerleri silmek

    // Örnek : ['Ahmet','Mehmet','Samet','Ali','Samet'] ----> ['Ahmet','Mehmet','Samet','Ali']
*/

removeDuplicates = arr => {
  let uniqueValues = {};

  arr.forEach(element => {
    if (!uniqueValues[element]) {
      uniqueValues[element] = true;
    }
  });

  return Object.keys(uniqueValues);
};

module.exports = removeDuplicates;
