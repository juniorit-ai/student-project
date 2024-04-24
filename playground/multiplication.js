function multiply(a, b) {
  if (b === 1) {
    return a;
  } else {
    return a + multiply(a, b - 1);
  }
}
console.log(multiply(5, 3)); // Output: 15