const_ = require('lodash');

const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23,
      },
    },
  },
};
console.log(obj);
console.log(JSON.stringify(obj, null, 2));
console.dir(obj, {
  depth: null,
});
console.log('%o', obj);
