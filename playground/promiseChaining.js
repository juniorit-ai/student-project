new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
.then(result => result * 2)
.then(result => result * 3)
.catch(error => console.error(error))
.then(result => console.log(result));