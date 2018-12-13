//parametre olarak girilen string ters çevrilmiş haline eşitse o string ifade Palindromdur.
//Palindrome('abba'); //true;
//Palindrome('abcdef'); //false

function palindrome(str){
    const reversed = str.split('').reverse().join('');
    //console.log(reversed);

    if(str === reversed){
       true;
    }
    return false;

}

/*  //ikinci Çözüm

    function(str){
        str.split('').everey((char,i)=>{
            return char === str[str.length - i - 1];
        });
    }

    

*/

module.exports=palindrome;