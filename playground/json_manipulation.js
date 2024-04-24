const userObj = { name: 'Alice', email: 'alice@example.com', phoneNumbers: ['123-456-7890', '987-654-3210'] };
const jsonString = JSON.stringify(userObj);
console.log(jsonString);
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);