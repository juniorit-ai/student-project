import 'dart:io';

void main() {
  print('Enter your name:');
  String? name = stdin.readLineSync();
  if (name != null && name.isNotEmpty) {
    print('Hello, $name!');
  } else {
    print('Name cannot be empty.');
  }
}