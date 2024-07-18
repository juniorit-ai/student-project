
# Introduction to Regular Expressions in Python
import re

def regex_search(pattern, text):
    match = re.search(pattern, text)
    if match:
        print(f'Pattern found within the text: {match.group()}')
    else:
        print('No match found')

# Test the function
regex_search('world', 'Hello, world!')
