function Queue() {
  this.elements = [];
}

Queue.prototype.enqueue = function(e) {
  this.elements.push(e);
};

Queue.prototype.dequeue = function() {
  return this.elements.shift();
};

Queue.prototype.isEmpty = function() {
  return this.elements.length === 0;
};

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2