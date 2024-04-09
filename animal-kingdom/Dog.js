const Mammal = require('./Mammal');

class Dog extends Mammal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log('Woof!');
  }
}

module.exports = Dog;