var globalVar = 'Accessible everywhere';

function scopeTest() {
  var localVar = 'Accessible only in scopeTest';
  console.log(globalVar); // Should print the global variable
  console.log(localVar); // Should print the local variable
}

scopeTest();
console.log(globalVar); // Should print the global variable
console.log(localVar); // Should throw a ReferenceError
