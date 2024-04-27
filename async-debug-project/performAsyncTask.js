// Function to perform an asynchronous task
async function performAsyncTask(data) {
  if (!data) {
    throw new Error('Invalid data');
  }
  // Simulate async operation with a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? resolve('Task completed') : reject('Task failed');
    }, 1000);
  });
}

module.exports = performAsyncTask;