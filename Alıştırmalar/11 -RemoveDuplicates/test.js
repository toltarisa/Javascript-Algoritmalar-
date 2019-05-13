const removeDuplicates = require('./index');

test('removeDuplicates bir fonksiyon mudur ?', () => {
  expect(typeof removeDuplicates).toEqual('function');
});

test('parametre olarak gecilen diziyi filter eder', () => {
  expect(removeDuplicates(["Ahmet","Ali","Samet","Ahmet","Kerim","Ali"])).toEqual(["Ahmet","Ali","Samet","Kerim"]);
});

test('parametre olarak gecilen diziyi filter eder', () => {
  expect(removeDuplicates(['1','6','2','1','5','7','2','4','5'])).toEqual(['1','6','2','5','7','4']);
});

