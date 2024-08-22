// calculator.js

const { getInput } = require('./inputHandler');
const { add, subtract, multiply, divide } = require('./operations');

// Main calculator logic
function calculator() {
    let num1 = parseFloat(getInput('Enter the first number: ')); // Convert input to number
    let num2 = parseFloat(getInput('Enter the second number: ')); // Convert input to number
    let operation = getInput('Enter the operation (+, -, *, /): ').trim();

    let result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }

    console.log('Result:', result);
}

// Run the calculator
calculator();
