void main() {
  final username = 'Alice';
  final password = 'secret';
  // Simulate user input
  var inputUsername = 'Alice';
  var inputPassword = 'secret';

  if (inputUsername == username && inputPassword == password) {
    print('Login successful!');
  } else {
    print('Login failed. Incorrect username or password.');
  }
}