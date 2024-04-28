const processData = async (data) => {
    if (!data.success) throw new Error('Invalid data');
    // Process data here
    return data.data.map(x => x * 2);
};

module.exports = { processData };