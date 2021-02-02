// when I installed axios, it automatically placed this line2 of code in
const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 +num2,
  isNull: () => null,
  checkValue: x => x, 
  createUser: () => {
    const user = { firstName: 'Cam' }
    user['lastName'] = 'Nepe';
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.data)
  .catch(err => 'error')
};

module.exports = functions;