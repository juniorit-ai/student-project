
# Using the find() method to locate substrings

def find_substring(text, substring):
    position = text.find(substring)
    if position != -1:
        print(f'The substring "{substring}" is found at position {position}')
    else:
        print(f'The substring "{substring}" is not found in the text')

# Test the function
find_substring('Hello, world!', 'world')
