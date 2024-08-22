// inputHandler.js

const readlineSync = require('readline-sync');

// Handling user input
function getInput(promptMessage) {
    return readlineSync.question(promptMessage);
}

module.exports = {
    getInput,
};
