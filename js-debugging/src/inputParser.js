function parseInput(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
    throw new Error('Invalid JSON input');
  }
}
module.exports = parseInput;