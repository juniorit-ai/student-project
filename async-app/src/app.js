const fetchData = async () => {
    try {
        // Simulate fetching data from an API
        const data = await fakeApiCall();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();