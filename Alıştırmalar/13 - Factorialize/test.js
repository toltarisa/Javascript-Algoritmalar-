const factorialize = require('./index');
test('factorialize bir fonksiyon mudur ?', () => {
  expect(typeof factorialize).toEqual('function');
});

test('parametre olarak gecilen degerin faktoriyelini hesaplar', () => {
  expect(factorialize(5)).toEqual(120);
});

test('parametre olarak gecilen degerin faktoriyelini hesaplar', () => {
  expect(factorialize(0)).toEqual(1);
});

test('parametre olarak gecilen degerin faktoriyelini hesaplar', () => {
  expect(factorialize(1)).toEqual(1);
});

test('parametre olarak gecilen degerin faktoriyelini hesaplar', () => {
  expect(factorialize(4)).toEqual(24);
});
