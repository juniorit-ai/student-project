import 'dart:io';

void main() {
  print('Enter a number:');
  var input = stdin.readLineSync();
  if (input != null && int.tryParse(input) != null) {
    var number = int.parse(input);
    print('The number is: $number');
  } else {
    print('Invalid input! Please enter a number.');
  }
}