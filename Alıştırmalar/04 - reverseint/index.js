//integer bir parametrenin tersini alan fonskiyonu oluştur
//reverseint(51) === 15;
//reverseint(981) === 189;

function reverseint(n){

    //İlk Çözümüm
    // var reversedToString = n.toString();
    // var arrayStr = reversedToString.split('');
    // //console.log(arrayStr); ['7','8','5'];

    // var reversed = arrayStr.reverse().join('');
    // var reversedInt = reversed.toString();

    // return reversedInt;

    var reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseint();