const palindrome = require('./index');

test('palindrome Fonksiyonu Mevcut Mu ?',()=>{
    expect(typeof palindrome).toEqual('function')
});

test('"aba" palindrom mu ?',()=>{
    expect('aba').toEqual('aba');
});

test('"nazan" palindrom mu ?',()=>{
    expect('nazan').toEqual('nazan');
});

test('"1000000001" bir palindrom sayıdır', () => {
    expect(palindrome("1000000001")).toBeTruthy();
});

test('"greetings" palindrom değildir',()=>{
    expect(palindrome('greetings')).toBeFalsy();
});
  