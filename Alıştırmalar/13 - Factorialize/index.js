/*
  Problem: Girililen sayının faktoriyelini alan fonksiyonu yaz.0 girildiğinde 1 döndürmeli!
*/
function factorialize(num) {
  let x = 1;
  for (let i = num; i > 0; i--) {
    x *= i;
  }
  return x;
}
module.exports = factorialize;
