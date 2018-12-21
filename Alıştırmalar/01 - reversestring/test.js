const reverse = require('./index');

test('reverse fonksiyonu mevcut', () => {
    expect(reverse).toBeDefined();
  });
  
  test('Reverse fonksiyonu stringi ters cevirir', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });
  
  test('Reverse fonksiyonu stringi ters cevirir', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });

  test('Reverse fonksiyonu stringi ters cevirir', () => {
    expect(reverse('Merhaba İsa')).toEqual('asİ abahreM');
  });