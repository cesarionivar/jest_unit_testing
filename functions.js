const { default: axios } = require("axios");

const functions = {

    add: (num1, num2) => num1 + num2,
    isNUll: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Cesario' };
        user['lastName'] = 'Nivar';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'Error')
}

module.exports = functions;

