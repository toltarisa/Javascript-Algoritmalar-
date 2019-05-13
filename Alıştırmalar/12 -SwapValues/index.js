/*
    Problem : İki degişkeni 3.ncu bir degişken kullanmadan swap islemi yapmak.
    Örneğin : a=10, b=5 ---> a=5, b=10;
*/

swapValues = (a,b) => {
    console.log("Before swap : ",a,b);
     a = a * b; //a = 50 b = 5;
     b = a / b; //b = 10 , a = 50;
     a = a / b; // b = 10, a = 5;
     console.log("After swap : ",a,b);
}

module.exports = swapValues;