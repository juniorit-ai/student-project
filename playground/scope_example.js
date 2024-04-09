let globalVar = 'I am a global variable';

function showScope() {
  let localVar = 'I am a local variable';
  console.log(globalVar); // Accessible here
  console.log(localVar); // Accessible here
}

showScope();
console.log(globalVar); // Accessible here
console.log(localVar); // ReferenceError: localVar is not defined
