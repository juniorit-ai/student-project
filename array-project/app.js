const { enqueue, dequeue } = require('./queue');

enqueue('apple');
enqueue('banana');
console.log(dequeue()); // Should log 'apple'
console.log(dequeue()); // Should log 'banana'