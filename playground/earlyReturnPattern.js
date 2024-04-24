function isNumberValid(num) {
  if (typeof num !== 'number') return false;
  if (num <= 10) return false;
  if (num % 2 !== 0) return false;
  return true;
}