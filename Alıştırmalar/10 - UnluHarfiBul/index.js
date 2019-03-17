/*
    String bir parametre alan fonksiyon oluştur.
    Bu fonksiyon girilen string degerdeki ünlü harflerin sayısını return etmeli
*/
// unluHarfiBul('merhaba sen') --> 4

//RegExp'li çözüm
function unluHarfiBul(str){
    let vowelRegExp = /[aeioöuü]/ig;
    const countOfVowels =  str.match(vowelRegExp);
    console.log(countOfVowels.length);
}

/*
includes fonksiyonu ES6 ile birlikte JS'e dahil oldu.

function unluHarfiBul(str){
    const vowels = "aeioöuü";
    let count  = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
*/

module.exports = unluHarfiBul;