const functions = require('./functions');


// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {

    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });


});

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


// CHECK FOR TRUTHY & FALSY VALUES
/* toBeNull matches only null  
   toBeUndefined matches only undefined
   toBeDefined is the opposite of toBeUndefined
   toBeTruthy matches anything that an if statement treats as true
   toBeFalsy matches anything that an if statement treats as false
*/

// toBeNull
test('Should be null', ()=> {
    expect(functions.isNUll()).toBe(null);
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toSctricEqual
test('User should be Cesario Nivar object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Cesario',
        lastName: 'Nivar'
    });
});

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
}); 

// Regex
test('There is no I in Team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['John', 'Karen', 'Admin'];
    expect(usernames).toContain('Admin');
});


// Working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});


// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
}); 