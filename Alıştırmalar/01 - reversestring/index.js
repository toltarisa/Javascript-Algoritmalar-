//string  parametre alan bir fonksiyonun girilen string değeri ters çevirmesi.
//Örnek
//reverse('apple') === 'elppa'
//reverse('hello') === 'olleh'


reverse = (str)=>{
    return str.split('').reverse().join('');
}


/* //İkinci Çözüm

reverse(str) =>{
    let reversed = '';
    
    for(let char of str){
        reversed+=char;
    }
    return reversed;
}

*/

/*   //Üçüncü Çözüm 

    reverse = (str)=> {
        return str.split('').reduce((rev,char)=> char + rev ,'');
    }
*/

module.exports = reverse;