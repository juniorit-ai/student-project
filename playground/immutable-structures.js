const myArray = [1, 2, 3];
// Attempt to reassign the array
// myArray = [4, 5, 6]; // This will throw an error

// Mutate the array
myArray.push(4); // This is allowed

const myObject = { name: 'Alice' };
Object.freeze(myObject);

// Attempt to mutate the object
// myObject.name = 'Bob'; // This will not work
// myObject.age = 30; // Neither will this