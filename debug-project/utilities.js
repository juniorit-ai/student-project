function sumArray(array) {
  var sum = 0;
  array.forEach(function(item) {
    sum += item;
  });
  return sum;
}
module.exports = sumArray;