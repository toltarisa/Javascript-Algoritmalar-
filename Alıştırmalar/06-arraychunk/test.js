const chunk = require('./index');

test('function chunk exists', () => {
  expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});