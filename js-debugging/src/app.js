const parseInput = require('./inputParser');
const processData = require('./dataProcessor');

const input = process.argv[2];

try {
  const parsedData = parseInput(input);
  const processedData = processData(parsedData);
  console.log(processedData);
} catch (error) {
  console.error(error.message);
}