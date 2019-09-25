const titleCaseTheSentence = require('./index');

test('factorialize bir fonksiyon mudur ?', () => {
  expect(typeof titleCaseTheSentence).toEqual('function');
});

test('parametre olarak gecilen degerdeki tum kelimelerin bas harfini buyutur', () => {
  expect(titleCaseTheSentence('hello world')).toEqual('Hello World');
});

test('parametre olarak gecilen degerdeki tum kelimelerin bas harfini buyutur', () => {
  expect(titleCaseTheSentence('merhaba ben isa')).toEqual('Merhaba Ben Isa');
});
