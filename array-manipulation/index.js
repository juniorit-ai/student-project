const { addElement, removeElement } = require('./arrayOperations');

let numbers = [1, 2, 3, 4, 5];

// Add and remove elements as per UML diagram
// Debug and fix the following calls
addElement(numbers, 6);
removeElement(numbers, 0);

console.log(numbers);
// Expected Final Output: [2, 3, 4, 5, 6]
