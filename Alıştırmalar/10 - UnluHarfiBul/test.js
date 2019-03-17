const unluHarfiBul = require('./index');

test('unluHarfiBul bir fonksiyon mudur ?', () => {
  expect(typeof unluHarfiBul).toEqual('function');
});

test('str degerdeki unlu harf sayisini dondurur', () => {
  expect(unluHarfiBul('aeiou')).toEqual(5);
});

test('str degerdeki unlu harf sayisini dondurur', () => {
  expect(unluHarfiBul('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('str degerdeki unlu harf sayisini dondurur', () => {
  expect(unluHarfiBul('bcdfghjkl')).toEqual(0);
});