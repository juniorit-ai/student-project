function calculateSum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + calculateSum(n - 1);
}

function outputResult() {
  const result = calculateSum(Math.floor(Math.random() * 10));
  console.log(`The sum is: ${result}`);
}

outputResult();