const reverseString = require('./revese-string');

// toBeDefineds
test('reverseString functions exists', () => {
    expect(reverseString).toBeDefined();
});

// toEqual
test('String reverses', ()=> {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverse with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});