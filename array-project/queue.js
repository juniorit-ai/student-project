const { addElement, removeFirstElement } = require('./arrayHelpers');

let queue = [];

function enqueue(element) {
  addElement(queue, element);
}

function dequeue() {
  return removeFirstElement(queue);
}

module.exports = { enqueue, dequeue };