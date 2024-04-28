const originalArray = [1, 2, 3, 4, 5];

// Incorrect mutation of the original array
originalArray.push(6);

// Correct approach using spread operator to create a new array
const newArray = [...originalArray, 6];

console.log(originalArray);
console.log(newArray);