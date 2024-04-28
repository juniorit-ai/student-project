function configureUserProfile(user) {
  const { name, email } = user;
  console.log(`User's Name: ${name}, User's Email: ${email}`);
}

// Sample user object
cnst user = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 30
};

configureUserProfile(user);