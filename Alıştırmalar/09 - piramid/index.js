//pozitif n sayısını parametre alan ve consola piramid seklini basan program

/*  piramid(1)
        '#'
    piramid(2)
        ' # '
        '###'    

    piramid(3)
         ' # '
        ' ### '
        '#####'
*/  

function piramid(n) {
    const mid = Math.floor((2 * n -1) / 2);

    if(n<0){
        return false;
    }

    for(let i=0;i<n;i++){
        let satir = '';
        for(let j=0;j<2*n-1;j++){
            if(mid - i <= j && mid + i  >= j){
                satir += "#";
            }else{
                satir += " ";
            }
        }
        console.log(satir);
    }
}

module.exports = piramid;