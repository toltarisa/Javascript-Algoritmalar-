//pozitif pir sayıyı paramtre alan bir fonksiyon yaz.
//fonksiyon girilen n sayısı kadar sıra olusturup
//bu sıralarda # karakteri console.log ile bas

//örn: steps(2)
/*
    #
    ##
*/

//steps(3)
/*
    #
    ##
    ###
*/

function steps(n){
    for(let i = 0;i<n;i++){
        let dizin = '';
        for(let j=0;j<n;j++){
            if(j<=i){
                dizin += '#';
            }else{
                dizin += ' ';
            }
        }
        console.log(dizin);
    }
}

// function steps(n){
//     if(n<0){
//         return false;
//     }

//     for(var i=1;i<=n;++i){
//         for(var j=1;j<=i;++j){
//             console.log('#');
//         }
//         console.log('\n');
//     }
// }

module.exports = steps;