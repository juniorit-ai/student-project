const validateData = require('./validateData');
const performAsyncTask = require('./performAsyncTask');

async function main() {
  try {
    const data = { /* some data */ };
    const isValid = validateData(data);
    if (isValid) {
      const result = await performAsyncTask(data);
      console.log(result);
    } else {
      throw new Error('Data validation failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();