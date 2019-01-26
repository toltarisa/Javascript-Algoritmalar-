/*
Parametre olarak bir array ve bir buyukluk alarak girilen arrayi verilen buyukluge gore 
subarraylere donusturen fonksiyonu yaz
*/

/*
    Örnekler:
    chunk([1,2,3,4],2) => [[1,2],[3,4]];

*/
function chunk(arr, size){

    var chunked = [];

    for(let element of arr){
        const last = chunked[chunked.lenght - 1];

        if(!last || last.length === size){
            chunked.push([element]);
        }else{
            last.push(element);
        }
    }
    
    return chunked;
}



module.exports = chunk;