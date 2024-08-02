
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    print('Application started');
    debugPrint('Building MyApp widget');
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Debugging Example'),
        ),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              debugger(); // Pause execution here
              print('Button pressed');
              debugPrint('Button interaction logged');
            },
            child: Text('Press Me'),
          ),
        ),
      ),
    );
  }
}
