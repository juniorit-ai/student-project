
import re

# Example string
text = 'Hello, world!'

# Using match() to check if the string starts with 'Hello'
match_result = re.match('Hello', text)
if match_result:
    print('Match found: ', match_result.group())
else:
    print('No match')

# Using search() to find 'world' in the string
search_result = re.search('world', text)
if search_result:
    print('Search successful: ', search_result.group())
else:
    print('No search result')
