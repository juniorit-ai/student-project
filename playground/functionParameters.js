function calculateTotal(price, taxRate = 0.05) {
  return price * (1 + taxRate);
}

console.log(calculateTotal(100)); // Expected output: 105
console.log(calculateTotal(100, 0.1)); // Expected output: 110