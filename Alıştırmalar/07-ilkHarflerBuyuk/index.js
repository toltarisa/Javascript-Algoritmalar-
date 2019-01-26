//problem: String paramtre alan bir fonksiyon olustur ve bu string ifadedeki
//her kelimenin ilk harfini upperCase yaparak döndur

//örn: capitalize('merhaba ben isa') ==> 'Merhaba Ben İsa'
/*DİGER COZUM YOLU

    function capitalize(str){
        const words = [];

        for(let word of str.split(' ')){
            words.push(word[0].toUpperCase() + word.slice(1));
        }

        return words.join(' ');
    }

*/

function capitalize(str){
    const splitted = str.split(' ');
    return splitted.map((value)=>{
        const bigger = value[0].toUpperCase();
        const sum = bigger + value.slice(1);
        return sum;
        }).join(' ');
    }
  
module.exports = capitalize;  