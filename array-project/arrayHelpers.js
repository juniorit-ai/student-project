function addElement(arr, element) {
  arr.push(element);
}

function removeFirstElement(arr) {
  return arr.shft(); // Bug: Typo in method name
}

function accessElement(arr, index) {
  return arr[index];
}

module.exports = { addElement, removeFirstElement, accessElement };