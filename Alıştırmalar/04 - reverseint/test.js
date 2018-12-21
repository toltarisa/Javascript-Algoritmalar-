import reverseint from './index';

test('reverseint fonksiyonu Mevcut Mu ?', () => {
    expect(reverseint).toBeDefined();
  });

  test("reverseint'e parametre olarak 0 verelim", () => {
    expect(reverseInt(0)).toEqual(0);
  });

  test('reverseint pozitif sayılarla kullanimi', () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });

  test('reverseint negatif sayılarla kullanimi', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });