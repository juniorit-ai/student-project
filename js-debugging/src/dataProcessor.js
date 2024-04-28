const processData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Data must be an array.');
  }
  return data.map(item => item * 2);
};
module.exports = processData;