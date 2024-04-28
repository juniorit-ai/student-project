const fakeApiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;
            if (shouldFail) {
                reject('Failed to fetch data.');
            } else {
                resolve({ success: true, data: [1, 2, 3] });
            }
        }, 1000);
    });
};

module.exports = { fakeApiCall };