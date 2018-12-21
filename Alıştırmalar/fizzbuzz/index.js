//Problem: 1 den n'e kadar olan sayılatı consola bas.Eger sayi 3'e bolunuyorsa  consola 'fizz'
// 5 'e bölünüyorsa 'buzz' yazdır.
//Eger hem 5'e hemde 3'e bölünüyorsa 'fizzbuzz yazdır :)

function fizzBuzz(n){

    for(let i = 1; i<=n; i++){

        if(n % 3 == 0 && n % 5 == 0){
            console.log('fizzbuzz');
        }
        else if(n % 3 == 0){
            console.log('fizz');
        }
        else if(n % 5 == 0){
            console.log('buzz');
        }
        else{
            console.log(i);
        } 
    }
}


exports.defaults = fizzBuzz; 