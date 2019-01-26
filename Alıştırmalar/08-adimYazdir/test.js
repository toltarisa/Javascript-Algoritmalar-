const steps = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps bir fonksiyon mu ?', () => {
  expect(typeof steps).toEqual('function');
});

test(' n = 1 icin ', () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('n=2 icin', () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('n=3 icin ', () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});