
// Declaring variables using var

var varVariable = 'Hello, var!';

console.log(varVariable); // Output: Hello, var!


// Declaring variables using let

let letVariable = 'Hello, let!';

console.log(letVariable); // Output: Hello, let!


// Declaring variables using const

const constVariable = 'Hello, const!';

console.log(constVariable); // Output: Hello, const!


// Demonstrating reassignability

varVariable = 'Updated var!';

console.log(varVariable); // Output: Updated var!


letVariable = 'Updated let!';

console.log(letVariable); // Output: Updated let!


// constVariable = 'Updated const!'; // This will cause an error


// Demonstrating block scope

if (true) {

    var varScoped = 'var inside block';

    let letScoped = 'let inside block';

    const constScoped = 'const inside block';

    console.log(varScoped); // Output: var inside block

    console.log(letScoped); // Output: let inside block

    console.log(constScoped); // Output: const inside block

}


// varScoped is accessible outside the block

console.log(varScoped); // Output: var inside block


// letScoped and constScoped are not accessible outside the block

// console.log(letScoped); // This will cause an error

// console.log(constScoped); // This will cause an error

    
