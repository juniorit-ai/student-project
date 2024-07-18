
# Example of First Principle Thinking in Python
# Breaking down a complex problem into fundamental parts

def analyze_string(text):
    # Fundamental part 1: Check if string starts with 'Hello'
    if text.startswith('Hello'):
        print('The string starts with Hello')
    else:
        print('The string does not start with Hello')

    # Fundamental part 2: Check if string ends with 'world!'
    if text.endswith('world!'):
        print('The string ends with world!')
    else:
        print('The string does not end with world!')

# Test the function
analyze_string('Hello, world!')
