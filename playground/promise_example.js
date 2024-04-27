function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      const error = null; // No error in this case
      if (error) {
        reject(error); // Reject the promise with an error if needed
      } else {
        resolve(data); // Resolve the promise with the fetched data
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Example of using the created Promise
fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });