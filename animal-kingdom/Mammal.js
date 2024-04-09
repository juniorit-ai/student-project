const Animal = require('./Animal');

class Mammal extends Animal {
  constructor(name) {
    super(name);
  }
}

module.exports = Mammal;