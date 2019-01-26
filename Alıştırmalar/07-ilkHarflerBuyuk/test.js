const capitalize = require('./index');

test('Capitalize bir fonksiyon mu ?', () => {
  expect(typeof capitalize).toEqual('function');
});

test('cumledeki her kelimenin ilk harfini büyütür', () => {
  expect(capitalize('hey sen merhaba nasıl gidiyor')).toEqual(
    'Hey Sen Merhaba Nasıl Gidiyor'
  );
});

test('ilk kharfi büyütür', () => {
  expect(capitalize('ben yazilim muhendisligi ogrencisiyim')).toEqual(
    'Ben Yazilim Muhendisligi Ogrencisiyim'
  );
});