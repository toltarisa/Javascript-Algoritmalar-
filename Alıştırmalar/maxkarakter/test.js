const maxkarakter = require('./index');

test('maxkarakter Fonksiyonu mevcut mu ?', () => {
    expect(typeof maxkarakter).toEqual('function');
  });
  
  test('En çok tekrar harfi bul', () => {
    expect(maxkarakter('a')).toEqual('a');
    expect(maxkarakter('abcdefghijklmnaaaaa')).toEqual('a');
  });
  
  test('En çok tekrar eden numarayı bul', () => {
    expect(maxkarakter('ab1c1d1e1f1g1')).toEqual('1');
  });