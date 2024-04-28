const person = { name: 'Alice', age: 30 };

// Incorrect mutation of the person object
person.age = 31;

// Correct approach using Object.assign to create a new object
const updatedPerson = Object.assign({}, person, { age: 31 });

console.log(person);
console.log(updatedPerson);