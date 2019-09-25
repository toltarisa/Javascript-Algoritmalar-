const findLongestWord = require('./index.js');

test('factorialize bir fonksiyon mudur ?', () => {
  expect(typeof findLongestWord).toEqual('function');
});

test('parametre olarak gecilen degerdeki en uzun kelimeyi hesaplar', () => {
  expect(findLongestWord('isa toltar merhaba dunya')).toEqual('merhaba');
});

test('parametre olarak gecilen degerin faktoriyelini hesaplar', () => {
  expect(findLongestWord('sen ben o biz onlar')).toEqual('onlar');
});
