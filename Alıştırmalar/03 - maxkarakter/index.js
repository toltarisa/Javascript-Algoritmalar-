//string bir parametre alarak string değerdeki en çok tekrar eden karaketeri
//bulan fonksiyonu yaz

//maxkarakter("abccccddddddda");//"ddddd";
//maxkarakter("abcccdaa 121111311");// "1";

function maxkarakter(str){

        const karakterler = {};

        for(let karakter of str){
            if(!karakterler[karakter]){
                karakterler[karakter] = 1;
            }
            else{
                karakterler[karakter]++;
            }
        }
        return karakterler;
}


module.exports = maxkarakter;