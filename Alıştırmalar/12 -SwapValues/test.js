const swapValues = require('./index');

test('removeDuplicates bir fonksiyon mudur ?', () => {
    expect(typeof swapValues).toEqual('function');
  });
  
  test('parametre olarak gecilen iki degeri swap eder.', () => {
    expect(swapValues(12,7)).toEqual(7,12);
  });
  
  test('parametre olarak gecilen iki degeri swap eder', () => {
    expect(swapValues(5,8)).toEqual(8,5);
  });