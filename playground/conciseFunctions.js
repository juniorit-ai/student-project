// Traditional function expression
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log(this);  // 'this' refers to the button element
});

// Concise arrow function
button.addEventListener('click', (event) => {
  console.log(this);  // 'this' refers to the enclosing context, not the button element
});